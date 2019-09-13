import React, {useState} from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {debellatioSetView} from "../store/views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import { createGame } from '../services/socketAPI';
import {debellatioSetGameCode, debellatioSetPlayers} from '../store/misc.reducer';

interface IProps {
    goToJoinGame:()=>void
    newGameCreated:(payload:string)=>void
    playerJoined:(payload:string)=>void
}

const CreateGamePage: React.FC<IProps> = ({goToJoinGame,newGameCreated,playerJoined}) => {
    const [name, setname] = useState('');
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setname(e.target.value);

    const creatNewGame = ()=>{
        createGame({name},{newGameCreated,playerJoined});
    };
    return (
        <main id="newGameView">
            <h1>Debellatio</h1>
            <input className="login-input" placeholder="Name" value={name} onChange={handleNameChange}/>
            <button className="startButton"  onClick={creatNewGame}>Create New Game</button>
            <button className="startButton" onClick={goToJoinGame}>Join a Game</button>
        </main>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    goToJoinGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.Join));
    },
    newGameCreated: (payload:string) =>{
        dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
        dispatch(debellatioSetGameCode(payload));
    },
    playerJoined: (payload:any) =>{
        dispatch(debellatioSetPlayers (payload));
    }
});

export default connect(null,mapDispatchToProps)(CreateGamePage);