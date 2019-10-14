import React from 'react';
import GameMap from "../components/GameMap/GameMap";
import CommandSheet from "../components/CommandSheet/CommandSheet";
import TopBar from "../components/TopBar/TopBar";

interface IProps {
};

const PlayPage: React.FC<IProps> = () => {
    return (
        <main id="playView">
            <TopBar/>
            <GameMap/>
            <CommandSheet/>
        </main>
    );
};


export default PlayPage;