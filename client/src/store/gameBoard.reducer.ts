import {Action} from '../models/Action';

const DEBELLATIO_UPDATE_BOARD = '[DEBELLATIO] GAME_BOARD_UPDATE';
const DEBELLATIO_UPDATE_PLAYER_ID = '[DEBELLATIO] PLAYER_ID_UPDATE';

// actions factories
export const debellatioUpdateBoard = (payload: Object) => {
    return {
        type: DEBELLATIO_UPDATE_BOARD,
        payload
    }
};
export const debellatioUpdatePlayerID = (payload: Object) => {
    return {
        type: DEBELLATIO_UPDATE_PLAYER_ID,
        payload
    }
};

const storeInit = {
    countryID: -1,
    season:0,
    armies: [],
    territories: [],
    troops:[],
    settings:{},
    stage:'waiting'
};

const gameBoredReducer = (state:{} = storeInit, action: Action) => {
    switch (action.type) {
        case DEBELLATIO_UPDATE_PLAYER_ID:
            return{
              ...state,
              countryID:action.payload
            };
        case DEBELLATIO_UPDATE_BOARD:
            return{
                ...state,
                ...action.payload
            };
    }
    return state;
};

export default gameBoredReducer;