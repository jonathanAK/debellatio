const {TerritoryTypeEnum,TroopTypeEnum} = require('./Enums');
const defaultTerritories  = require('./defaults/territories');
const territoryHolders = JSON.parse(require('./defaults/territoryHolders'));

module.exports = class Debellatio{
    constructor(playerList,gameSettings){
        this.troops = [];
        this.armies=[];
        this.orders=new Array(22).fill(null);
        this.populateTerritoriesAndTroops(playerList.length);
        this.season = 0;
        this.gameSettings = gameSettings;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
        for (let i=0; i<playerList.length;i++){
            this.armies.push({name :playerList[i].name});
        }
    };

    populateTerritoriesAndTroops(numOfPlayers){
        this.territories = JSON.parse(defaultTerritories);
        for(let i=0; i<this.territories.length;i++){
            this.territories[i].army = territoryHolders[numOfPlayers][i];
            if(this.territories[i].capital != null){
                const troopType = (this.territories[i].type === TerritoryTypeEnum.Land?TroopTypeEnum.Platoon:TroopTypeEnum.Ship);
                this.territories[i].troop = troopType;
                this.troops.push({
                    "location":i,
                    "type":troopType,
                    "army":this.territories[i].army
                });
            }
        }
    };

    dispatchOrders(msg){
        try{
            if(msg.season === this.season){
                const playerId = this.playerList.findIndex(item => item.id === msg.playerSocket)+1;
                Object.keys(msg.commands).forEach((troop)=>{
                    const currentTroop = this.troops[parseInt(troop)];
                    const currentTarget = parseInt(msg.commands[troop].target);
                    const currentTroopTerritory = this.territories[currentTroop.location];
                    if (currentTroop.army === playerId){
                        if (currentTarget === currentTroop.location || currentTroopTerritory.borders.includes(currentTarget)) {
                            this.orders[parseInt(troop)] = msg.commands[troop];
                        }
                    }
                });
            }
        }catch{
            console.log('received bad input');
        }
    }

    isSeasonOver(roomSocket,season=null){
        if(season!== null){
            if (season === this.season){
                this.resolveSeason(roomSocket);
            }
        }else{
            if(this.orders.findIndex((item, index) => item === null && this.troops[index].army !== 0) === -1){
                this.resolveSeason(roomSocket);
            }
        }
    }

    resolveSeason(roomSocket){
        this
        //     .shiftAssistToDefence()
        //     .convoyTroops()
        //     .createAttackTable()
        //     .cleanUp() // re3turn things to null add 1 to season.
            .updateTroopViewInTerritories()
            .emitToSocket(roomSocket);
    }

    updateTroopViewInTerritories(){
        for(let i=0; i<this.troops.length;i++){
            this.territories[this.troops[i].location].troop = this.troops[i].type;
        }
        return this;
    };

    emitToSocket(roomSocket){
        roomSocket.emit('newSeason', {
            territories:this.territories,
            troops:this.troops,
        });
    }
};