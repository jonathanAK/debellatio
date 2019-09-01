import {Territory} from '../models/Territory';


// actions types
interface TerritoriesSetAllAction {
    type: any
    payload: any
}

type TerritoriesDataActionTypes = TerritoriesSetAllAction



const territoriesDataReducer = (state:Array<Territory> ,action:TerritoriesDataActionTypes) => {

    return state;
};

export default territoriesDataReducer;