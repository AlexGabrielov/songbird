import React from 'react';

const BirdInfo = (props) => {
  return (
    <div className='bird-info-wrapper'>
      <div className='bird-image-container-info'>image</div>
      <div className='bird-name-and-player-wrapper'>
        <div className='bird-name-container-info'>ястреб</div>
        <div className="bird-latin-name-container-info">ястреб латин</div>
        <div className='audio-player-container-info'>плеер</div>
      </div>
      <div className="bird-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellat, sed! Non qui assumenda delectus consectetur aperiam explicabo ad praesentium illum ipsam
        facere vel consequuntur labore, ab asperiores neque! Blanditiis, aspernatur!
       </div>
    </div>
  )
}

export default BirdInfo;