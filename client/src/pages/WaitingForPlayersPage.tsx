import React from 'react';
import { connect } from 'react-redux';

interface IProps {
    joinCode:string
    players:any
}

const WaitingForPlayersPage: React.FC<IProps> = ({joinCode,players}) => {
    return (
        <main id="waitingView">
            <h1>Waiting for Players to Join</h1>
            {/*/!*<button id="startButton" class="hidden startButton" onclick="startGame()">Start Game</button>*!/*/}
            <h1 id="pinCodeDisplay">{joinCode}</h1>
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

export default connect(mapStateToProps)(WaitingForPlayersPage);