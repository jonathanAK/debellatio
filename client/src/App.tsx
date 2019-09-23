import React from 'react';
import {connect} from "react-redux";
import './App.css';
import {ActiveViewEnum} from './models/ActiveView';

//Import Pages
import JoinPage from './pages/JoinPage';
import CreateGamePage from './pages/CreateGamePage';
import WaitingForPlayersPage from './pages/WaitingForPlayersPage';
import QaBar from './components/QA/QaBar';
import PlayPage from './pages/PlayPage';
import SummaryPage from "./pages/SummaryPage";

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
      case ActiveViewEnum.PLayPage:
        return <PlayPage/>;
      case ActiveViewEnum.Summary:
        return <SummaryPage/>;
    }
    return;
  }
  return (
      <>
        <QaBar/>
      {view}
      </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeView: state.views.activeView,
  }
};

export default connect(mapStateToProps)(App);
