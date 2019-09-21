import React from 'react';
import {debellatioSetView} from "../../store/views.reducer";
import {ActiveViewEnum} from "../../models/ActiveView";
import {connect} from "react-redux";
import './QaBar.css';

const QaBar = ({goToCreateGame,goToPlayPage}) => {
    return (
        <div id={"QaBar"}>
            <button onClick={goToCreateGame}> Go to Create Game</button>
            <button onClick={goToPlayPage}> Go to play page</button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    goToCreateGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.CreateGame));
    },
    goToPlayPage: () => {
    dispatch(debellatioSetView (ActiveViewEnum.PLayPage));
},
});

export default connect(null,mapDispatchToProps)(QaBar);