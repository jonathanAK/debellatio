import React,{ useState } from 'react';
import {debellatioSetView} from "../../store/views.reducer";
import {ActiveViewEnum} from "../../models/ActiveView";
import {connect} from "react-redux";
import './QaBar.css';
import {
    debellatioResetTime, debellatioSetSproutTimer,
    debellatioTimeTik,
    debellatioUpdateBoard,
    debellatioUpdatePlayerID
} from "../../store/gameBoard.reducer";
import {sampleGameObject} from "./sampleGameObject";
import {debellatioSetGameCode, debellatioSetPlayers} from "../../store/misc.reducer";
import {samplePLayersArray} from "./samplePLayersArray";

const QaBar = ({goToCreateGame,goToWaiting,goToPlayPage,goToSpectator,goToWinner,goToSprout}) => {
    const [closed, setClosed] = useState(false);
    if(closed) return(<div/>);
    return (
    <div id={"QaBar"}>
        <button onClick={()=>setClosed(true)}>X</button>
        <button onClick={goToCreateGame}>Go to Create Game</button>
        <button onClick={goToPlayPage}>Go to play page</button>
        <button onClick={goToSpectator}>Spectator Mode</button>
        <button onClick={goToWinner}>Winner Page </button>
        <button onClick={goToWaiting}>Waiting Page </button>
        <button onClick={goToSprout}>Sprout Page </button>
    </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    goToCreateGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.CreateGame));
    },
    goToPlayPage: () => {
        dispatch(debellatioSetView (ActiveViewEnum.PLayPage));
        dispatch(debellatioUpdatePlayerID(1));
        dispatch(debellatioUpdateBoard(sampleGameObject));
        dispatch(debellatioUpdateBoard({stage:'main'}));
        setInterval(()=>dispatch(debellatioTimeTik()),1000);
        dispatch(debellatioResetTime());
    },
    goToWaiting: () => {
        dispatch(debellatioSetPlayers(samplePLayersArray));
        dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
        dispatch(debellatioSetGameCode('ABCD'));
    },
    goToSpectator: () => {
        dispatch(debellatioSetView (ActiveViewEnum.PLayPage));
        dispatch(debellatioUpdatePlayerID(-1));
        dispatch(debellatioUpdateBoard(sampleGameObject));
        dispatch(debellatioUpdateBoard({stage:'main'}));
        setInterval(()=>dispatch(debellatioTimeTik()),1000);
        dispatch(debellatioResetTime());
    },
    goToWinner: () => {
        dispatch(debellatioUpdatePlayerID(1));
        dispatch(debellatioUpdateBoard(sampleGameObject));
        dispatch(debellatioUpdateBoard({stage:'main'}));
        dispatch(debellatioUpdateBoard ({winner:2}));
        dispatch(debellatioSetView (ActiveViewEnum.Summary));
    },
    goToSprout: () =>{
        dispatch(debellatioSetView (ActiveViewEnum.PLayPage));
        dispatch(debellatioUpdatePlayerID(1));
        dispatch(debellatioUpdateBoard(sampleGameObject));
        dispatch(debellatioSetSproutTimer());
        dispatch(debellatioUpdateBoard({stage:'sprout'}));
    }
});

export default connect(null,mapDispatchToProps)(QaBar);