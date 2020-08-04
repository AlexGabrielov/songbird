import React, { useState } from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';
import Answers from '../src/components/answers/Answers';
import BirdInfo from '../src/components/bird-info/BirdInfo';
import CurrentQuestion from '../src/components/current-question/CurrentQuestion';
import Header from '../src/components/header/Header';
import birdsData from '../src/birds';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function App() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [currentBirdIndex, setCurrentBirdIndex] = useState(getRandomInt(6));
  const [score, setScore] = useState(0);

  console.log(currentBirdIndex);

  return (
    <div className="app-container">
      <Header score={score} />
      <CurrentQuestion categoryIndex={categoryIndex} currentBirdIndex={currentBirdIndex} />
      <div className="answers-and-birdinfo-wrapper">
        <Answers categoryIndex={categoryIndex} />
        <BirdInfo />
      </div>
      <button type="button" className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default App;
