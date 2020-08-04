import React, {useState} from 'react';
import birdsData from '../../birds';
import defaultBird from '../../unknown-bird.jpg';

const CurrentQuestion = ({categoryIndex, currentBirdIndex, guessed}) => {
  return (
    <div className='question-wrapper'>
      <img src={defaultBird} alt="bird" className='bird-img-question'/>
      <div className="group-name-and-player">
        <div className='bird-name-container'>{guessed ? birdsData[categoryIndex][currentBirdIndex].name : '******'}</div>
        <div className='audio-player-container'>
          <audio src="" controls></audio>
        </div>
      </div>
    </div>
  )
}

export default CurrentQuestion;