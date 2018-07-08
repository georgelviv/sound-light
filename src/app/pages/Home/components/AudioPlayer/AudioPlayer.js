import React from 'react';
import { AudioProgress } from '../AudioProgress';
import { AudioActions } from '../AudioActions';
import { AudioVolume } from '../AudioVolume';

const AudioPlayer = () => {
  return (
    <div>
      <div className='home__progress'>
        <AudioProgress />
      </div>
      <div className="home__actions">
        <AudioActions />
        <AudioVolume />
      </div>
    </div>
  );
};

export { AudioPlayer };