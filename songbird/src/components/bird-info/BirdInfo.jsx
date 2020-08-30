import React from 'react';
import birdsData from '../../birds';

const BirdInfo = ({currentAnswerIndex, categoryIndex}) => {
  const currentBird = birdsData[categoryIndex][currentAnswerIndex];
  // const {audio} = currentBird;
  console.log(currentBird);
  return !currentBird ? (
    <div className='bird-info-wrapper'>
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка</p>
    </div>
  ) : (
    <div className='bird-info-wrapper'>
      <div className='bird-image-container-info'>
        <img src={currentBird?.image} alt="bird"/>
      </div>
      <div className='bird-name-and-player-wrapper'>
        <div className='bird-name-container-info'>{currentBird?.name}</div>
        <div className="bird-latin-name-container-info">{currentBird?.species}</div>
        <div className='audio-player-container-info'>
          <audio src={currentBird?.audio} controls></audio>
        </div>
      </div>
      <div className="bird-description">
       {currentBird?.description}
      </div>
    </div>
  )
}

export default BirdInfo;