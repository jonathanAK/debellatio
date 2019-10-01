import  SocketListner  from "../models/SocketListner";
import {debellatioSetView} from "./views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import {debellatioSetGameCode, debellatioSetPlayers} from "./misc.reducer";
import {Dispatch} from "redux";
import {debellatioUpdateBoard,debellatioUpdatePlayerID} from "./gameBoard.reducer";


const socketListners:(dispatch: Dispatch)=>Array<SocketListner> =(dispatch:Dispatch)=>{
    return(
        [
            {
                event:'gameCreated',
                fn:(message:string) => {
                    dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
                    dispatch(debellatioSetGameCode(message));
                }
            },
            {
                event:'gameJoined',
                fn:() => {
                    dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
                }
            },
            {
                event:'playerJoined',
                fn:(message:[object]) => {
                    dispatch(debellatioSetPlayers(message));
                }
            },
            {
                event:'playerId',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdatePlayerID(message));
                }
            },
            {
                event:'gameStarted',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard({...message,stage:'main'}));
                    dispatch(debellatioSetView (ActiveViewEnum.PLayPage));
                }
            },
            {
                event:'commandReceived',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard({stage:'waiting'}));
                }
            },
            {
                event:'newSeason',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard(message));
                }
            },
            {
                event:'gameOver',
                fn:(message:[object]) => {
                    dispatch(debellatioSetView (ActiveViewEnum.Summary));
                }
            }
        ]
    );
};
export default (socketListners);