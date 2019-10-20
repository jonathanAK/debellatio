import React from 'react';
import {connect} from "react-redux";
import './TopBar.css';
import {timeToSec,phaseToSeason} from "../../services/time";

interface IProps {
    playerName:string
    playerId:number
    timeLeft:number
    season: number
    seasonsPerYear : number
    isGm:boolean
}

const TopBar: React.FC<IProps> = ({playerName,playerId,timeLeft,season,seasonsPerYear,isGm}) => {
    return (
        <div className={`TopBar player${playerId}`}>
            <div><div>season: &nbsp;</div><div>{phaseToSeason(season,seasonsPerYear)}</div></div>
            <div>{!isGm && <div>commander: &nbsp;</div>}{!isGm &&<div>{playerName}</div>}</div>
            <div><div>time Left: &nbsp;</div><div>{timeToSec(timeLeft)}</div></div>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        playerName: (state.board.countryID === -1?'':state.board.armies[state.board.countryID-1].name),
        playerId:state.board.countryID,
        timeLeft:state.board.timeLeft,
        season: state.board.season,
        seasonsPerYear: state.board.settings.seasonsPerYear,
        isGm: state.board.countryID === -1
    }
};

export default connect(mapStateToProps)(TopBar);