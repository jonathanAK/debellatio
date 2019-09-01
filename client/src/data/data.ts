import {Troops} from './troop/troops';
import {Territories} from './territory/territories';
import {Armies} from './army/armies';
 
export class Debelation{
    public territories :any[];
    public troops :any[]; 
    public armies :any[]; 

  constructor(){
    this.territories = this.populateTerritories();
    this.troops = this.populateTroops();
    this.armies = this.populateArmies();
  }


  public populateTerritories(){
    return Territories;
  }
  public populateTroops(){
    return Troops;
  }
  public populateArmies(){
    return Armies;
  }
}

