import io from 'socket.io-client';
import { debellatioSetView } from './views.reducer';

export default function socketMiddleware() {
    // const socket = io();
    //
    // return ({ dispatch }:MiddlewareAPI) => (next:dispatch) => (action) => {
    //     switch (action.type) {
    //         case DEBELLATIO_SET_VIEW:
    //             dispatch (  debellatioSetView(action.payload))
    //             break;
    //     }
    //
    //
    //     if (typeof action === 'function') {
    //         return next(action);
    //     }
    //
    // };
};