import React from 'react';
import {connect} from "react-redux";
import './css/SummaryPage.css';
import {Dispatch} from "redux";
import {debellatioSetView} from "../store/views.reducer";
import {ActiveViewEnum} from "../models/ActiveView";

interface IProps {
    winner:string
    goToJoinGame:(payload:object)=>void
}

const SummaryPage: React.FC<IProps> = ({winner,goToJoinGame}) => {
    return (
        <main id="summaryPage">
            <h1>The Winner</h1>
            <h2 className={'capitalize'}>{winner.toLowerCase()}</h2>
            <button className="CrateGamePage_button" onClick={goToJoinGame}>New Game</button>
        </main>
    );
};

const mapStateToProps = (state:any) => {
    return {
        winner: state.board.armies[state.board.winner-1].name
    }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    goToJoinGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.Join));
    },
});


export default connect(mapStateToProps,mapDispatchToProps)(SummaryPage);