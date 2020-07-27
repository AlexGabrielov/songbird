import React from 'react';
import './App.css';
import Answers from '../src/components/answers/Answers';
import BirdInfo from '../src/components/bird-info/BirdInfo';
import CurrentQuestion from '../src/components/current-question/CurrentQuestion';
import Header from '../src/components/header/Header';
import birdsData from '../src/birds';

function App() {
  return (
    <div className="app-container">
      <Header />
      <CurrentQuestion />
      <Answers />
      <BirdInfo />
    </div>
  );
}

export default App;
