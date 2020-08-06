import React, {useState} from 'react';
import birdsData from '../../birds';
import defaultBird from '../../unknown-bird.jpg';

const CurrentQuestion = ({categoryIndex, currentBirdIndex, guessed}) => {
  const {audio, image, name} = birdsData[categoryIndex][currentBirdIndex]
  return (
    <div className='question-wrapper'>
      <img src={guessed ? image : defaultBird} alt="bird" className='bird-img-question'/>
      <div className="group-name-and-player">
        <div className='bird-name-container'>{guessed ? name : '******'}</div>
        <div className='audio-player-container'>
          <audio src={audio} controls></audio>
        </div>
      </div>
    </div>
  )
}

export default CurrentQuestion;