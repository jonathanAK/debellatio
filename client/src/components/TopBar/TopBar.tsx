import React from 'react';
import {connect} from "react-redux";
import './TopBar.css';
import {timeToSec,phaseToSeason} from "../../services/time";

interface IProps {
    playerName:string
    timeLeft:number
    season: number
    seasonsPerYear : number
}

const TopBar: React.FC<IProps> = ({playerName,timeLeft,season,seasonsPerYear}) => {
    return (
        <div className={'TopBar'}>
            <div>{`season: ${phaseToSeason(season,seasonsPerYear)} `}</div>
            <div> {`commander ${playerName}`} </div>
            <div>{`time Left: ${timeToSec(timeLeft)}`}</div>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        playerName: state.board.armies[state.board.countryID-1].name,
        timeLeft:state.board.timeLeft,
        season: state.board.season,
        seasonsPerYear: state.board.settings.seasonsPerYear
    }
};

export default connect(mapStateToProps)(TopBar);