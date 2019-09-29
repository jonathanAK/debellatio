import React from 'react';
import GameMap from "../components/GameMap/GameMap";
import CommandSheet from "../components/CommandSheet/CommandSheet";

interface IProps {
};

const PlayPage: React.FC<IProps> = () => {
    return (
        <main id="playView">
            <GameMap/>
            {/*<CommandSheet troops={} territory={} army={} commandSubmit={}/>*/}
            <h1>I am the command sheet</h1>
        </main>
    );
};


export default PlayPage;