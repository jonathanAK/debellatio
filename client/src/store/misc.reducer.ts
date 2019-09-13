import {Action} from '../models/Action';

const DEBELLATIO_SET_GAME_CODE = '[DEBELLATION] GAME_CODE_SET';
const DEBELLATIO_SET_PlAYERS = '[DEBELLATION] PLAYERS_SET';

// actions factories
export const debellatioSetGameCode = (payload: string) => {
    return {
        type: DEBELLATIO_SET_GAME_CODE,
        payload
    }
};
export const debellatioSetPlayers = (payload: Array<Object>) => {
    return {
        type: DEBELLATIO_SET_PlAYERS,
        payload
    }
};

const storeInit = {
    gameCode: "",
    players: []
};

const viewsReducer = (state:{} = storeInit, action: Action) => {
    switch (action.type) {
        case DEBELLATIO_SET_GAME_CODE:
            return {
                ...state,
                gameCode:[...action.payload]
            };
        case DEBELLATIO_SET_PlAYERS:
            return{
                ...state,
                players:[...action.payload]
            };
    }
    return state;
};

export default viewsReducer;