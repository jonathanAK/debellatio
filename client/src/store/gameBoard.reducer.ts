import {Action} from '../models/Action';

const DEBELLATIO_UPDATE_BOARD = '[DEBELLATION] GAME_BOARD_UPDATE';

// actions factories
export const debellatioUpdateBoard = (payload: Object) => {
    return {
        type: DEBELLATIO_UPDATE_BOARD,
        payload
    }
};

const storeInit = {
    countryID: -1,
    empires: [],
    territories: [],
    troops:[]
};

const gameBoredReducer = (state:{} = storeInit, action: Action) => {
    switch (action.type) {
        case DEBELLATIO_UPDATE_BOARD:
            return{
                ...state,
                ...action.payload
            };
    }
    return state;
};

export default gameBoredReducer;