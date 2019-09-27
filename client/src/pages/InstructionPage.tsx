import React, {useState} from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {debellatioSetView} from "../store/views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import { sendSocketMessage } from '../store/socketMiddleware';

interface IProps {
    goToJoinGame:()=>void
    createGame:(payload:object)=>void
}

const InstructionPage: React.FC<IProps> = ({goToJoinGame,createGame}) => {
    const [name, setname] = useState('');
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setname(e.target.value);

    const createNewGame = ()=>{
        createGame({name});
        // createGame({name},{newGameCreated,playerJoined});
    };
    return (
        <main id="newGameView">
            <h1>Debellatio</h1>
            <input className="login-input" placeholder="Name" value={name} onChange={handleNameChange}/>
            <button className="startButton"  onClick={createNewGame}>Create New Game</button>
            <button className="startButton" onClick={goToJoinGame}>Join a Game</button>
        </main>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    goToJoinGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.Join));
    },
    createGame:(payload:object)=>{
        dispatch(sendSocketMessage('newGame',payload));
    }
});

export default connect(null,mapDispatchToProps)(InstructionPage);