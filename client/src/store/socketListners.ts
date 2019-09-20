import  SocketListner  from "../models/SocketListner";
import {debellatioSetView} from "./views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import {debellatioSetGameCode, debellatioSetPlayers} from "./misc.reducer";
import {Dispatch} from "redux";


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
            }
        ]
    );
};
export default (socketListners);