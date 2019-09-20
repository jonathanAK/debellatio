import openSocket from 'socket.io-client';
import {Action} from '../models/Action';
import {Dispatch, Middleware, MiddlewareAPI} from 'redux';
import {debellatioSetView} from "./views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import {debellatioSetGameCode, debellatioSetPlayers} from "./misc.reducer";


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
    socket.on('gameCreated', (message:string) => {
        dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
        dispatch(debellatioSetGameCode(message));
    });
    socket.on('gameJoined', () => {
        dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
    });
    socket.on('playerJoined', (message:[object]) => {
        dispatch(debellatioSetPlayers(message));
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

