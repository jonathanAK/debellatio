const {TerritoryTypeEnum,TroopTypeEnum} = require('./Enums');
const defaultTerritories  = require('./defaults/territories');
const territoryHolders = JSON.parse(require('./defaults/territoryHolders'));

module.exports = class Debellatio{
    constructor(playerList,gameSettings){
        this.armies=[];
        this.orders={};
        this.attackTable={};
        this.populateTerritories(playerList.length);
        this.season = 0;
        this.gameSettings = gameSettings;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
        for (let i=0; i<playerList.length;i++){
            this.armies.push({name :playerList[i].name});
        }
    };

    populateTerritories(numOfPlayers){
        this.territories = JSON.parse(defaultTerritories);
        for(let i=0; i<this.territories.length;i++){
            this.territories[i].army = territoryHolders[numOfPlayers][i];
            if(this.territories[i].army > 0 && this.territories[i].capital != null){
                this.territories[i].troop = (this.territories[i].type === TerritoryTypeEnum.Land?TroopTypeEnum.Platoon:TroopTypeEnum.Ship);
            }
        }
    };

    getGameData(initial = false){
        const initialStats = (initial?{armies:this.armies,settings:this.gameSettings}:{});
        return{
            territories:this.territories,
            season:this.season,
            ...initialStats
        };
    };

    dispatchOrders(msg){
        try{
            if(msg.season === this.season){
                const playerId = this.playerList.findIndex(item => item.id === msg.playerSocket)+1;
                Object.keys(msg.commands).forEach((troop)=>{
                    const troopPosition = parseInt(troop)
                    const currentTroop = this.territories[troopPosition];
                    const currentTarget = parseInt(msg.commands[troopPosition].target);
                    if (currentTroop.army === playerId){
                        if (currentTarget === troopPosition || currentTroop.borders.includes(currentTarget)) {
                            this.orders[troopPosition] = msg.commands[troopPosition];
                        }
                    }
                });
            }
        }catch{
            console.log('received bad input');
        }
    };

    isSeasonOver(sendUserNewSeason,season=null){
        if(season!== null){
            if (season === this.season){
                this.resolveSeason(sendUserNewSeason);
            }
        }else{
            if(this.territories.findIndex((item, index) => item.troop !== null && this.orders[index] === undefined) === -1){
                this.resolveSeason(sendUserNewSeason);
            }
        }
    }

    resolveSeason(sendUserNewSeason){
        this
            .shiftAssistToDefence()
            .convoyTroops()
            .createAttackTable()
            .moveTroops()
            .cleanUp()
            .emitToSocket(sendUserNewSeason);
    }

    shiftAssistToDefence(){
        Object.keys(this.orders).forEach((orderKey)=>{
            const {order,target} = this.orders[orderKey];
            if( order ==='attack' || order==='convoy'){
                if(this.territories[target].troop !== null){
                    if(!this.orders[target] || (this.orders[target].order !== 'attack' && this.orders[target].order !== 'getConvoyed')){
                        this.orders[target] = {order:'defend', target};
                    }
                }
            }
        });
        return this;
    }

    convoyTroops(){
        Object.keys(this.orders).forEach((orderKey)=>{
            const {order,target} = this.orders[orderKey];
            if( order ==='getConvoyed' && this.orders[target].order === 'convoy'){
                    this.orders[orderKey] = {order:'attack', target:this.orders[target].target};
            }
        });
        return this;
    }

    createAttackTable(){
        Object.keys(this.orders).forEach((troop)=>{
            const {order,target,aux} = this.orders[troop];
            const whoIsAttacking = {'defend':target,'attack':troop,'assist':aux};
            const force = whoIsAttacking[order];
            if(!this.attackTable[target]){this.attackTable[target]={}}
            if(!this.attackTable[target][force]){this.attackTable[target][force]=1}
            else{this.attackTable[target][force]+=1}
        });
        return this;
    }

    moveTroops(){
        const unitsToPlace = [];
        Object.keys(this.attackTable).forEach((battle)=>{
            let max = 0;
            let strongest = battle;
            let tie = false;
            Object.keys(this.attackTable[battle]).map(troop=> {
                if ( this.attackTable[battle][troop] > max){
                    strongest = troop;
                    max = this.attackTable[battle][troop];
                    tie = false;
                }else if (this.attackTable[battle][troop] === max){tie = true}
            });
            if (strongest !== battle && ! tie){
                unitsToPlace.push({territory:battle,army:this.territories[strongest].army,troop:this.territories[strongest].troop});
                this.territories[strongest].troop = null;
            }
        });
        unitsToPlace.forEach(({territory,army,troop})=>{
            this.territories[territory].army = army;
            this.territories[territory].troop = troop;
        });
        return this;
    }

    cleanUp(){
        this.attackTable={};
        this.orders={};
        this.season++;
        return this;
    }

    emitToSocket(sendUserNewSeason){
        sendUserNewSeason(this.getGameData());
        setTimeout(()=>{this.isSeasonOver(sendUserNewSeason,this.season)},this.gameSettings.seasonLength * 60000);
    }
};