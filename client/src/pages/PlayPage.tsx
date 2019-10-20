import React from 'react';
import GameMap from "../components/GameMap/GameMap";
import CommandSheet from "../components/CommandSheet/CommandSheet";
import TopBar from "../components/TopBar/TopBar";
import {connect} from "react-redux";
import './css/PlayPage.css';

interface IProps {
    isGm:boolean
}

const PlayPage: React.FC<IProps> = ({isGm}) => {
    return (
        <main id="playPage">
            <TopBar/>
            <GameMap/>
            {!isGm && <CommandSheet/>}
        </main>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isGm: state.board.countryID === -1
    }
};

export default connect(mapStateToProps)(PlayPage);
