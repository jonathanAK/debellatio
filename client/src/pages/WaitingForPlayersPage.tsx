import React from 'react';

interface IProps {
};

const WaitingForPlayersPage: React.FC<IProps> = () => {
    return (
        <main id="waitingView">
            <h1>Waiting for Players to Join</h1>
            {/*/!*<button id="startButton" class="hidden startButton" onclick="startGame()">Start Game</button>*!/*/}
            {/*<h1 id="pinCodeDisplay"></h1>*/}
            {/*<h2 id="playerList"></h2>*/}
        </main>
    );
};


export default WaitingForPlayersPage;