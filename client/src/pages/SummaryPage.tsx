import React from 'react';
import {connect} from "react-redux";

interface IProps {
    winner:string
}

const SummaryPage: React.FC<IProps> = ({winner}) => {
    return (
        <main id="joinView">
            and the winner is {winner}
        </main>
    );
};

const mapStateToProps = (state:any) => {
    return {
        winner: state.board.armies[state.board.winner-1].name
    }
};

export default connect(mapStateToProps)(SummaryPage);