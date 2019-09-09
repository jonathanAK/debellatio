import React from 'react';

interface IProps {
};

const JoinPage: React.FC<IProps> = () => {
    return (
        <main id="joinView">
            <h1>Debellatio</h1>
            <form>
                <input id="joinNameBox" className="login-input" name="name" placeholder="Name"/>
                <input id="pinBox" className="login-input" name="id" placeholder="Game PIN"/>

            </form>
            <button className="startButton">Join Now</button>
            <button className="startButton" >Create New game</button>
        </main>
    );
};


export default JoinPage;