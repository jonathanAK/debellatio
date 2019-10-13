import {Action} from '../models/Action';

const DEBELLATIO_UPDATE_BOARD = '[DEBELLATIO] GAME_BOARD_UPDATE';
const DEBELLATIO_UPDATE_PLAYER_ID = '[DEBELLATIO] PLAYER_ID_UPDATE';
const DEBELLATIO_RESET_TIME = '[DEBELLATIO] RESET_TIME';
const DEBELLATIO_TIME_TIK = '[DEBELLATIO] TIME_TIK';

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

export const debellatioResetTime = () => {
    return {
        type: DEBELLATIO_RESET_TIME
    }
};

export const debellatioTimeTik = () => {
    return {
        type: DEBELLATIO_TIME_TIK,
    }
};

const storeInit = {
    countryID: -1,
    season:0,
    armies: [],
    territories: [],
    settings:{},
    stage:'waiting',
    timeLeft:0,
    winner:0
};

const gameBoredReducer = (state:any = storeInit, action: Action) => {
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
        case DEBELLATIO_RESET_TIME:
            return{
                ...state,
                timeLeft : state.settings.seasonLength*60-5
            };
        case DEBELLATIO_TIME_TIK:
            return{
                ...state,
                timeLeft:state.timeLeft -1
            };
    }
    return state;
};

export default gameBoredReducer;