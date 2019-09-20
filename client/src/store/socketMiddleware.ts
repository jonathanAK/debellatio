import openSocket from 'socket.io-client';
import {Action} from '../models/Action';
import {Dispatch, Middleware, MiddlewareAPI} from 'redux';
import socketListners from "./socketListners";

//define middleware action
const DEBELATIO_SEND_SOCKET = "DEBELATIO_SEND_WEBSOCKET_MESSAGE";

// actions factories
export const sendSocketMessage = (msgType:string,msgVal:any=null) => {
    return {
        type: DEBELATIO_SEND_SOCKET,
        payload: {msgType,msgVal}
    }
};

const socketMiddleware:Middleware = ({dispatch}: MiddlewareAPI)=>{
    const  socket = openSocket('http://localhost:4000'); //for dev use change to bellow when done
    // const  socket = openSocket(process.env.PUBLIC_URL);

    //register socket listeners
    socketListners(dispatch).forEach(socketListner=>{
        socket.on(socketListner.event, socketListner.fn);
    });

    //handle sending socket messages to server
    return(next: Dispatch) => (action:Action) => {
        if (action.type === DEBELATIO_SEND_SOCKET){
                socket.emit(action.payload.msgType,action.payload.msgVal);
        }
        return next(action);
    }
};

export default ([socketMiddleware]);

