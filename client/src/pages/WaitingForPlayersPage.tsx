import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from "redux";
import {sendSocketMessage} from "../store/socketMiddleware";
import './css/WaitingForPlayersPage.css';

interface IProps {
    joinCode:string
    players:any
    startGame:(gameId:string)=>void
}

const WaitingForPlayersPage: React.FC<IProps> = ({joinCode,players,startGame}) => {
    return (
        <main id="waitingView">
            <h1>Waiting for Players</h1>
            <h1 id="pinCodeDisplay">{joinCode}</h1>
            {joinCode !== "" && <button className="Waiting_startButton"  onClick={()=>{startGame(joinCode)}}>Start Game</button>}
            <div className={'Waiting_playersBox'}>
            {
                players.map((player:any)=>(
                    <h2 key={player.id} className={'Waiting_player'}>{player.name}</h2>
                ))
            }
            </div>
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
    startGame:(gameId:string)=>{
        dispatch(sendSocketMessage('startGame',{gameId}));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(WaitingForPlayersPage);