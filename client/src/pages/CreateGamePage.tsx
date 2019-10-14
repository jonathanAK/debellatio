import React, {useState} from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {debellatioSetView} from "../store/views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import { sendSocketMessage } from '../store/socketMiddleware';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';

interface IProps {
    goToJoinGame:()=>void
    createGame:(payload:object)=>void
}

const CreateGamePage: React.FC<IProps> = ({goToJoinGame,createGame}) => {
    const [state, setState] = React.useState({
        name: '',
        longYear: false,
        maxPlayers: 7,
        seasonLength:6,
        firstSeason:12,
        gmMode:false
    });

    const handleInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.value });
    };
    const handleSwitchChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [name]: event.target.checked });
    };
    const handleSliderChange = (name: string) => (event: any,newValue: number | number[]) => {
        setState({ ...state, [name]: newValue });
    };

    const createNewGame = ()=>{
        createGame({
            name:state.name,
            longYear:state.longYear,
            seasonLength:state.seasonLength,
            firstSeason:state.firstSeason,
            maxPlayers:state.maxPlayers,
            GM:state.gmMode
        });
    };
    return (
        <main id="newGameView">
            <h1>Debellatio</h1>
            <input
                className="login-input"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange('name')}
            />
            <h3>Seasons Per Year</h3>
            <Switch
                checked={state.longYear}
                onChange={handleSwitchChange('longYear')}
            />
            <h3>Maximum Number Of players</h3>
            <Slider
                min={2}
                max={7}
                step={1}
                marks
                valueLabelDisplay="auto"
                value={state.maxPlayers}
                onChange={handleSliderChange('maxPlayers')}
            />
            <h3>Season Length (Min)</h3>
            <Slider
                min={1}
                max={30}
                step={1}
                marks
                valueLabelDisplay="auto"
                value={state.seasonLength}
                onChange={handleSliderChange('seasonLength')}
            />
            <h3>First Season Length (Min)</h3>
            <Slider
                min={1}
                max={30}
                step={1}
                marks
                valueLabelDisplay="auto"
                value={state.firstSeason}
                onChange={handleSliderChange('firstSeason')}
            />
            <h3>Spectator Mode</h3>
            <Switch
                checked={state.gmMode}
                onChange={handleSwitchChange('gmMode')}
            />
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

export default connect(null,mapDispatchToProps)(CreateGamePage);