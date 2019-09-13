import React, {useState} from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import { debellatioSetView } from '../store/views.reducer';
import {ActiveViewEnum} from '../models/ActiveView';
import {joinGame} from "../services/socketAPI";
import { debellatioSetPlayers } from '../store/misc.reducer';


interface IProps {
    goToCreateGame:() => void
    joinedGame:() => void
    playerJoined:(payload:any) => void
}

const JoinPage: React.FC<IProps> = ({goToCreateGame,joinedGame,playerJoined}) => {
    const [name, setname] = useState('');
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setname(e.target.value);
    const [gamePin, setGamePin] = useState('');
    const handleGamePinChange = (e:React.ChangeEvent<HTMLInputElement>) => setGamePin(e.target.value);

    const joinNewGame = () =>{
        joinGame({name, code:gamePin},{joinedGame,playerJoined});
    };


    return (
        <main id="joinView">
            <h1>Debellatio</h1>
            <form>
                <input className="login-input"  placeholder="Name" value={name} onChange={handleNameChange}/>
                <input className="login-input"  placeholder="Game PIN" value={gamePin} onChange={handleGamePinChange}/>

            </form>
            <button className="startButton" onClick={joinNewGame}>Join Now</button>
            <button className="startButton" onClick={goToCreateGame}>Create New game</button>
        </main>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    goToCreateGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.CreateGame));
    },
    joinedGame: () =>{
        dispatch(debellatioSetView (ActiveViewEnum.WaitingForPlayers));
    },
    playerJoined: (payload:any) =>{
        dispatch(debellatioSetPlayers (payload));
    }
});

export default connect(null,mapDispatchToProps)(JoinPage);