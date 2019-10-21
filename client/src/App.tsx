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
import {sendSocketMessage} from "./store/socketMiddleware";
import {Dispatch} from "redux";

interface IProp {
  activeView: ActiveViewEnum
  gameId:string
  rejoin:(payload:object)=>void
  gameOver:(payload:string)=>void
}

const App: React.FC<IProp> = ({activeView,gameId,rejoin,gameOver}) => {
  const view = getActiveView();
  function getActiveView(): JSX.Element | undefined {
    switch (activeView) {
      case ActiveViewEnum.Join:
        //check if in the middle of an existing game
        if (localStorage.getItem('socketId')) {
          rejoin({'socketId':localStorage.getItem('socketId'), 'gameId':localStorage.getItem('gameId')});
        }
        return <JoinPage/>;
      case ActiveViewEnum.CreateGame:
        return <CreateGamePage/>;
      case ActiveViewEnum.WaitingForPlayers:
        return <WaitingForPlayersPage/>;
      case ActiveViewEnum.PLayPage:
        return <PlayPage/>;
      case ActiveViewEnum.Summary:
        gameOver(gameId);
        return <SummaryPage/>;
    }
    return;
  }
  return (
      <>
        {process.env.NODE_ENV === 'development' && <QaBar/>}
      {view}
      </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeView: state.views.activeView,
    gameId:state.board.settings.gameId
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  rejoin: (payload:object) =>{
    dispatch(sendSocketMessage('rejoin',payload));
  },
  gameOver: (payload:string) =>{
    dispatch(sendSocketMessage('gameOver',payload));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
