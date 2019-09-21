import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from "redux";
import {debellatioSetView} from "../store/views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import {sendSocketMessage} from "../store/socketMiddleware";

interface IProps {
    joinCode:string
    players:any
    startGame:()=>void
}

const WaitingForPlayersPage: React.FC<IProps> = ({joinCode,players,startGame}) => {
    return (
        <main id="waitingView">
            <h1>Waiting for Players to Join</h1>
            {/*/!*<button id="startButton" class="hidden startButton" onclick="startGame()">Start Game</button>*!/*/}
            <h1 id="pinCodeDisplay">{joinCode}</h1>
            {joinCode !== "" && <button className="startButton"  onClick={startGame}>Start Game</button>}
            {
                players.map((player:any)=>(
                    <h2>{player.name}</h2>
                ))
            }
        </main>
    );
};

const mapStateToProps = (state:any) => {
    return {
        joinCode: state.misc.gameCode,
        players: state.misc.players
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startGame:()=>{
        dispatch(sendSocketMessage('startGame'));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(WaitingForPlayersPage);