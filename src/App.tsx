import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommandSheet from './components/CommandSheet/CommandSheet';
import {Troops} from "./data/troop/troops";
import {Territories} from "./data/territory/territories";

const App: React.FC = () => {
  return (
    <div className="App">
      <CommandSheet troops={Troops} army={'D'} territory={Territories} commandSubmit={()=>{console.log('ggg')} }/>
    </div>
  );
}

export default App;
