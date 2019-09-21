import React from 'react';
import {debellatioSetView} from "../../store/views.reducer";
import {ActiveViewEnum} from "../../models/ActiveView";
import {connect} from "react-redux";
import './QaBar.css';

const QaBar = ({goToCreateGame}) => {
    return (
        <div id={"QaBar"}>
            <button onClick={goToCreateGame}> Go to Create Game</button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => ({
    goToCreateGame: () => {
        dispatch(debellatioSetView (ActiveViewEnum.CreateGame));
    }
});

export default connect(null,mapDispatchToProps)(QaBar);