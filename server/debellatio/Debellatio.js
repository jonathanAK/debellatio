import defaultTerritories from './defaults/territories';
import defaultTroops from './defaults/troops';
import defaultArmies from './defaults/armies';

export class Debellatio{
    constructor(roomId,playerList){
        this.territories = JSON.parse(defaultTerritories);
        this.troops = JSON.parse(defaultTroops);
        this.armies = JSON.parse(defaultArmies);
        this.roomId = roomId;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
    }

    // populateTerritories(){
    //     return Territories;
    // }
}