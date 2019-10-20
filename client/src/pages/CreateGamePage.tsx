import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {debellatioSetView} from "../store/views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";
import { sendSocketMessage } from '../store/socketMiddleware';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import './css/CreateGamePage.css';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
    goToJoinGame:()=>void
    createGame:(payload:object)=>void
}

const useStyles = makeStyles({
    buttonRoot: {
        color: '#3a3d2a',
        width: 70,
        height: 35,
        padding: 0,
    },
    sliderRoot: {
        color: '#3a3d2a',
        height: 8,
    },
    switchBase: {
        padding: 0,
        '&$checked': {
            color: 'white',
            colorSecondary:'white'
        },
        '&$checked + $track': {
            backgroundColor: '#263000',
            opacity: 0.8,
        },
    },
    checked:{
        left: 17,
    },
    track: {},
    thumb: {
        width: 35,
        height: 35,
    },
    sliderThumb:{
        marginTop: -11,
        marginLeft: -11,
        width: 35,
        height: 35,
        border: '1px solid black',
    },
    valueLabel: {
        left: 0,
    },
    rail:{
        color: '#668000',
        opacity: 1,
        height: 13,
        borderRadius: 4,
    },
    mark: {
        marginTop: 4,
        height: 5,
    },
});

const CreateGamePage: React.FC<IProps> = ({goToJoinGame,createGame}) => {
    const [state, setState] = React.useState({
        name: '',
        longYear: false,
        maxPlayers: 7,
        seasonLength:6,
        firstSeason:12,
        gmMode:false
    });
    const classes = useStyles();

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
                className="CrateGamePage_input"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange('name')}
            />
            <div className={'CreateGame_settingForm'}>
                <div className={'CreateGame_sliders'}>
                    <h3>Maximum Number Of players</h3>
                    <Slider
                        min={2}
                        max={7}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                        value={state.maxPlayers}
                        onChange={handleSliderChange('maxPlayers')}
                        classes={{
                            root:classes.sliderRoot,
                            rail: classes.rail,
                            thumb: classes.sliderThumb,
                            mark: classes.mark,
                            valueLabel:classes.valueLabel
                        }}
                    />
                    <h3>Season Length (Minutes)</h3>
                    <Slider
                        min={1}
                        max={30}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                        value={state.seasonLength}
                        onChange={handleSliderChange('seasonLength')}
                        classes={{
                            root:classes.sliderRoot,
                            rail: classes.rail,
                            thumb: classes.sliderThumb,
                            mark: classes.mark,
                            valueLabel:classes.valueLabel
                        }}
                    />
                    <h3>First Season Length (Minutes)</h3>
                    <Slider
                        min={1}
                        max={30}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                        value={state.firstSeason}
                        onChange={handleSliderChange('firstSeason')}
                        classes={{
                            root:classes.sliderRoot,
                            rail: classes.rail,
                            thumb: classes.sliderThumb,
                            mark: classes.mark,
                            valueLabel:classes.valueLabel
                        }}
                    />
                </div>
                <div className={'CreateGame_spectatorButton'}>
                    <h3>Spectator Mode</h3>
                    <Switch
                        checked={state.gmMode}
                        onChange={handleSwitchChange('gmMode')}
                        classes={{
                            root: classes.buttonRoot,
                            switchBase: classes.switchBase,
                            thumb: classes.thumb,
                            checked: classes.checked,
                            track: classes.track
                        }}
                    />
                </div>
                <div className={'CreateGame_seasonsButton'}>
                    <h3 className={'CreateGame_seasonsTitle'}>Seasons Per Year</h3>
                        <h3>2</h3>
                        <Switch
                            checked={state.longYear}
                            onChange={handleSwitchChange('longYear')}
                            disableRipple
                            classes={{
                                root: classes.buttonRoot,
                                switchBase: classes.switchBase,
                                thumb: classes.thumb,
                                checked: classes.checked,
                                track: classes.track
                            }}

                        />
                        <h3>4</h3>
                </div>
            </div>
            <button className="CrateGamePage_button"  onClick={createNewGame}>Create New Game</button>
            <button className="CrateGamePage_button" onClick={goToJoinGame}>Join a Game</button>
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