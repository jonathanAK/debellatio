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
    const socketURL = (process.env.NODE_ENV === 'development'?'http://localhost:4000' : process.env.PUBLIC_URL);
    const  socket = openSocket(socketURL);

    //persist socket to localstorage
    socket.on('gameStarted', (msg:any) => {
        localStorage.setItem('socketId', socket.id);
        localStorage.setItem('gameId', msg.settings.roomId);
    });
    socket.on('rejoinGame', (msg:any) => {
        localStorage.setItem('socketId', socket.id);
    });

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

