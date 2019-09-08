import React from 'react';
import './App.css';
import {ActiveViewEnum} from './models/ActiveView';

//Import Pages
import JoinPage from './pages/JoinPage';
// import CreateGamePage from './pages/CreateGamePage';
// import WaitingForPlayersPage from './pages/WaitingForPlayersPage';

const activeView = ActiveViewEnum.Join;

const view = getActiveView();
function getActiveView(): JSX.Element | undefined {
  let view;
  switch (activeView) {
    case ActiveViewEnum.Join:
      view = <JoinPage/>;
      break;
  //   case ActiveView.quiz:
  //     const q = getActiveQuestion();
  //     view = <QuizPage text={q.text}
  //                      options={q.options}
  //                      correctAnswers={correctAnswers}
  //                      totalQuestions={activeQuestion}
  //                      onNext={nextQuestion()}/>;
  //     break;
  //
  //   case ActiveView.summary:
  //     view = <SummaryPage onStartAgain={startQuiz}
  //                         correctAnswers={correctAnswers}
  //                         totalQuestions={questions.length}/>;
  //
  //     break;
  }

  return view;
}


const App: React.FC = () => {
  const view = getActiveView();
  function getActiveView(): JSX.Element | undefined {

    switch (activeView) {
      case ActiveViewEnum.Join:
        return <JoinPage/>;
        //   case ActiveView.quiz:
        //     const q = getActiveQuestion();
        //     view = <QuizPage text={q.text}
        //                      options={q.options}
        //                      correctAnswers={correctAnswers}
        //                      totalQuestions={activeQuestion}
        //                      onNext={nextQuestion()}/>;
        //     break;
        //
        //   case ActiveView.summary:
        //     view = <SummaryPage onStartAgain={startQuiz}
        //                         correctAnswers={correctAnswers}
        //                         totalQuestions={questions.length}/>;
        //
        //     break;
    }
    return;
  }
  return (
      <>
      {view}
      </>
  );
};

export default App;
