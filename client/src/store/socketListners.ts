import  SocketListner  from "../models/SocketListner";
import {debellatioSetView} from "./views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import {debellatioSetGameCode, debellatioSetPlayers} from "./misc.reducer";
import {Dispatch} from "redux";
import {
    debellatioResetTime,
    debellatioTimeTik,
    debellatioUpdateBoard,
    debellatioUpdatePlayerID,
    debellatioSetSproutTimer
} from "./gameBoard.reducer";


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
                    setInterval(()=>dispatch(debellatioTimeTik()),1000);
                }
            },
            {
                event:'commandReceived',
                fn:() => {
                    dispatch(debellatioUpdateBoard({stage:'waiting'}));
                }
            },
            {
                event:'newSeason',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard(message));
                    dispatch(debellatioResetTime());
                    dispatch(debellatioUpdateBoard({stage:'main'}));
                }
            },
            {
                event:'sproutPhase',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard(message));
                    dispatch(debellatioSetSproutTimer());
                    dispatch(debellatioUpdateBoard({stage:'sprout'}));
                }
            },
            {
                event:'gameOver',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard ({winner:message}));
                    dispatch(debellatioSetView (ActiveViewEnum.Summary));
                }
            },
            {
                event:'rejoinGame',
                fn:(message:[object]) => {
                    dispatch(debellatioUpdateBoard({...message,stage:'main'}));
                    dispatch(debellatioSetView (ActiveViewEnum.PLayPage));
                    setInterval(()=>dispatch(debellatioTimeTik()),1000);
                    dispatch(debellatioUpdateBoard({stage: 'waiting'}));
                }
            },
        ]
    );
};
export default (socketListners);