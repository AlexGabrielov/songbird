import React from 'react';
import birdsData from '../../birds';
import correct from '../../correct.mp3'
import error from '../../error.mp3'
import { useState } from 'react';

const Answers = ({
  categoryIndex,
  setCurrentAnswerIndex,
  setScoreIncrement,
  setGuessed,
  currentBirdIndex,
  setCurrentBirdIndex,
  guessed,
  setScore,
  score,
  scoreIncrement,
  results,
}) => {

  return (
    <div className="answers-wrapper">
      <ul>
        {birdsData[categoryIndex].map(({ name }, index) => (
          <li
            key={name}
            className="list-item-answer"
            onClick={() => {
              setCurrentAnswerIndex(index);
              if (index === currentBirdIndex && !guessed) {
                setGuessed(true);
                new Audio(correct).play();
                results[index] = true;
                setScore(score + scoreIncrement);
              } 
              if (index !== currentBirdIndex && !guessed && results[index] !== false) {
                new Audio(error).play();
                results[index] = false;
                setScoreIncrement(scoreIncrement - 1)
              }
            }}
          >
            <div
              className={`list-item-button ${
                results[index] === true ? 'green' : results[index] === false ? 'red' : ''
              }`}
            />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
