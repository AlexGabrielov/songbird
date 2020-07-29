import React from 'react';
import birdsData from '../../birds';

const Answers = ({categoryIndex}) => {
  return (
    <div className="answers-wrapper">
    <ul>
     {birdsData[categoryIndex].map(({name}) => <li>{name}</li>)}
    </ul>
    </div>
  )
}

export default Answers;