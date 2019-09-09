import React from 'react';

interface IProps {
};

const CreateGamePage: React.FC<IProps> = () => {
    return (
        <main id="newGameView">
            <h1>Debellatio</h1>
            {/*<input id="createNameBox" className="login-input" name="name" placeholder="Name"/>*/}
            {/*<button className="startButton" /!*onClick="newGame()"*!/>Create New Game</button>*/}
            {/*<button className="startButton" /!*onClick="setJoinView()"*!/>Join a Game</button>*/}
        </main>
    );
};


export default CreateGamePage;