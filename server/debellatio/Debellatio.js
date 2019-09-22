const defaultTerritories  = require('./defaults/territories');
const defaultTroops = require('./defaults/troops');
const defaultArmies = require('./defaults/armies');

module.exports = class Debellatio{
    constructor(roomId,playerList){
        this.territories = JSON.parse(defaultTerritories);
        this.troops = JSON.parse(defaultTroops);
        this.armies = JSON.parse(defaultArmies);
        this.season = 0;
        this.roomId = roomId;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
    };

    // populateTerritories(){
    //     return Territories;
    // }
};