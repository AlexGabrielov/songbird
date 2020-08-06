import React from 'react';
import birdsData from '../../birds';

const Answers = ({categoryIndex, setCurrentAnswerIndex}) => {
  return (
    <div className="answers-wrapper">
    <ul>
      {birdsData[categoryIndex].map(({name}, index) => <li key={name} onClick={() => setCurrentAnswerIndex(index)}>{name}</li>)}
    </ul>
    </div>
  )
}

export default Answers;