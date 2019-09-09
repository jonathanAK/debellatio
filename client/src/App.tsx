import React from 'react';
import {connect} from "react-redux";
import './App.css';
import {ActiveViewEnum} from './models/ActiveView';

//Import Pages
import JoinPage from './pages/JoinPage';
import CreateGamePage from './pages/CreateGamePage';
import WaitingForPlayersPage from './pages/WaitingForPlayersPage';

interface IProp {
  activeView: ActiveViewEnum
}

const App: React.FC<IProp> = ({activeView}) => {
  const view = getActiveView();
  function getActiveView(): JSX.Element | undefined {
    switch (activeView) {
      case ActiveViewEnum.Join:
        return <JoinPage/>;
      case ActiveViewEnum.CreateGame:
        return <CreateGamePage/>;
      case ActiveViewEnum.WaitingForPlayers:
        return <WaitingForPlayersPage/>;
    }
    return;
  }
  return (
      <>
      {view}
      </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeView: state.views,
  }
};

export default connect(mapStateToProps)(App);
