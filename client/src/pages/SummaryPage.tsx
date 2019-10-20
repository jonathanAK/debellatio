import React from 'react';
import {connect} from "react-redux";
import './css/SummaryPage.css';

interface IProps {
    winner:string
}

const SummaryPage: React.FC<IProps> = ({winner}) => {
    return (
        <main id="summaryPage">
            <h1>The Winner</h1>
            <h2 className={'capitalize'}>{winner.toLowerCase()}</h2>
        </main>
    );
};

const mapStateToProps = (state:any) => {
    return {
        winner: state.board.armies[state.board.winner-1].name
    }
};

export default connect(mapStateToProps)(SummaryPage);