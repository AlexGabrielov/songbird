import React from 'react';
import birdsData from '../../birds';

const CurrentQuestion = (props) => {
  return (
    <div className='question-wrapper'>
      <img src="" alt="bird" className='bird-img-question'/>
      <div className="group-name-and-player">
        <div className='bird-name-container'>Ястреб</div>
        <div className='audio-player-container'>
          <audio src="" controls></audio>
        </div>
      </div>
    </div>
  )
}

export default CurrentQuestion;