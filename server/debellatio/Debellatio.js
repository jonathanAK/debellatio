const defaultTerritories  = require('./defaults/territories');
const defaultTroops = require('./defaults/troops');
const defaultArmies = require('./defaults/armies');

module.exports = class Debellatio{
    constructor(roomId,playerList,gameSettings){
        this.territories = JSON.parse(defaultTerritories);
        this.troops = JSON.parse(defaultTroops);
        this.armies = JSON.parse(defaultArmies);
        this.season = 0;
        this.roomId = roomId;
        this.gameSettings = gameSettings;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
        for (let i=0; i<playerList.length;i++){
            this.armies[i].name = playerList[i].name;
        }
    };

    // populateTerritories(){
    //     return Territories;
    // }
};