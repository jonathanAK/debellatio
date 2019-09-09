import {ActiveViewEnum} from '../models/ActiveView';
import {Action} from '../models/Action';

const DEBELLATIO_SET_VIEW = '[DEBELLATION] VIEW_SET';

// actions factories
export const debellatioSetView = (payload: ActiveViewEnum) => {
    return {
        type: DEBELLATIO_SET_VIEW,
        payload
    }
};

const storeInit = ActiveViewEnum.Join;

const viewsReducer = (state:ActiveViewEnum = storeInit, action: Action) => {
    switch (action.type) {
        case DEBELLATIO_SET_VIEW:
            state = action.payload;
            break;
    }
    return state;
};

export default viewsReducer;