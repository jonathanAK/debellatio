import {ActiveViewEnum} from '../models/ActiveView';
import {Action} from '../models/Action';
import {GamePhaseEnum} from "../models/GamePhase";

const DEBELLATIO_SET_VIEW = '[DEBELLATION] VIEW_SET';

// actions factories
export const debellatioSetView = (payload: ActiveViewEnum) => {
    return {
        type: DEBELLATIO_SET_VIEW,
        payload
    }
};

const storeInit = {
    activeView:ActiveViewEnum.Join,
    gamePhase:GamePhaseEnum.GameMaster
};

const viewsReducer = (state:{} = storeInit, action: Action) => {
    switch (action.type) {
        case DEBELLATIO_SET_VIEW:
            return {
                ...state,
                activeView:action.payload
            };
    }
    return state;
};

export default viewsReducer;