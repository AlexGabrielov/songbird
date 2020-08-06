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
  const [guessed, setGuessed] = useState(false);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);

  console.log(currentAnswerIndex);

  return (
    <div className="app-container">
      <Header score={score} categoryIndex={categoryIndex} />
      <CurrentQuestion
        categoryIndex={categoryIndex}
        currentBirdIndex={currentBirdIndex}
        guessed={guessed}
      />
      <div className="answers-and-birdinfo-wrapper">
        <Answers categoryIndex={categoryIndex} setCurrentAnswerIndex={setCurrentAnswerIndex} />
        <BirdInfo currentAnswerIndex={currentAnswerIndex} categoryIndex={categoryIndex} />
      </div>
      <button type="button" className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default App;
