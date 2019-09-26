const {TerritoryTypeEnum,TroopTypeEnum} = require('./Enums');
const defaultTerritories  = require('./defaults/territories');
const territoryHolders = JSON.parse(require('./defaults/territoryHolders'));

module.exports = class Debellatio{
    constructor(roomId,playerList,gameSettings){
        this.troops = [];
        this.armies=[];
        this.populateTerritoriesAndTroops(playerList.length);
        this.season = 0;
        this.roomId = roomId;
        this.gameSettings = gameSettings;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
        for (let i=0; i<playerList.length;i++){
            this.armies[i].name = playerList[i].name;
        }
    };

    populateTerritoriesAndTroops(numOfPlayers){
        this.territories = JSON.parse(defaultTerritories);
        for(let i=0; i<this.territories.length;i++){
            this.territories.army = territoryHolders[numOfPlayers][i];
            if(this.territories[i].capital != null){
                this.troops.push({
                    "location":i,
                    "type": (this.territories[i].type === TerritoryTypeEnum.Land?TroopTypeEnum.Platoon:TroopTypeEnum.Ship),
                    "army":this.territories.army
                });
            }
        }
    }
    // adjustBoardForLessPlayers(numOfPlayers){
    //     switch (numOfPlayers) {
    //         case
    //     }
    // }



};