import React from 'react';
import birdsData from '../../birds';

const Answers = ({categoryIndex, setCurrentAnswerIndex}) => {
  return (
    <div className="answers-wrapper">
    <ul>
      {birdsData[categoryIndex].map(({name}, index) => 
        <li key={name} className='list-item-answer' onClick={() => setCurrentAnswerIndex(index)}>
          <div className="list-item-button" />
          {name}
        </li>)}
    </ul>
    </div>
  )
}

export default Answers;