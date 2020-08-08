import React from 'react';
import birdsData from '../../birds';

const Answers = ({
  categoryIndex,
  setCurrentAnswerIndex,
  setScoreIncrement,
  setGuessed,
  currentBirdIndex,
  setCurrentBirdIndex,
}) => {
  const results = [null, null, null, null, null, null];
  return (
    <div className="answers-wrapper">
      <ul>
        {birdsData[categoryIndex].map(({ name }, index) => (
          <li
            key={name}
            className="list-item-answer"
            onClick={() => {
              setCurrentAnswerIndex(index);
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
