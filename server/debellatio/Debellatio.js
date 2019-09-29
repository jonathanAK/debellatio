const {TerritoryTypeEnum,TroopTypeEnum} = require('./Enums');
const defaultTerritories  = require('./defaults/territories');
const territoryHolders = JSON.parse(require('./defaults/territoryHolders'));

module.exports = class Debellatio{
    constructor(playerList,gameSettings){
        this.troops = [];
        this.armies=[];
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
                    "army":this.territories.army
                });
            }
        }
    };

    updateTroopViewInTerritories(){
        for(let i=0; i<this.troops.length;i++){
            this.territories[this.troops[i].location].troop = this.troops[i].type;
        }
    };

};