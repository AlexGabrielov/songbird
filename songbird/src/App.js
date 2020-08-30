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
  const [scoreIncrement, setScoreIncrement] = useState(5);
  const [results, setResults] = useState([null, null, null, null, null, null]);
  const [finished, setFinished] = useState(false);
  const [perfect, setPerfect] = useState(false);

  console.log(currentBirdIndex);

  return (
    <div className="app-container">
      <Header score={score} categoryIndex={categoryIndex} />

      <CurrentQuestion
        categoryIndex={categoryIndex}
        currentBirdIndex={currentBirdIndex}
        guessed={guessed}
      />
      <div className="answers-and-birdinfo-wrapper">
        <Answers
          categoryIndex={categoryIndex}
          setCurrentAnswerIndex={setCurrentAnswerIndex}
          setScoreIncrement={setScoreIncrement}
          setGuessed={setGuessed}
          currentBirdIndex={currentBirdIndex}
          setCurrentBirdIndex={setCurrentBirdIndex}
          guessed={guessed}
          setScore={setScore}
          score={score}
          scoreIncrement={scoreIncrement}
          results={results}
          setResults={setResults}
        />
        <BirdInfo currentAnswerIndex={currentAnswerIndex} categoryIndex={categoryIndex} />
      </div>
      <button
        type="button"
        className={`btn btn-secondary ${guessed ? 'btn-next' : ''}`}
        onClick={() => {
          if (guessed && categoryIndex === 5) {
            if (score === 30) {
              setFinished(true);
              setPerfect(true);
            } else {
              setFinished(true);
            }
          }
          if (guessed && !finished && categoryIndex !== 5) {
            setResults([null, null, null, null, null, null]);
            setCategoryIndex(categoryIndex + 1);
            setGuessed(false);
            setCurrentBirdIndex(getRandomInt(6));
            setScoreIncrement(5);
            setCurrentAnswerIndex(null);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
