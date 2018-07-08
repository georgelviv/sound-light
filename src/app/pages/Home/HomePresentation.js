import React from 'react';
import { SpinnerOverlay } from 'shared';
import {
  FileForm,
  AudioList,
  AudioPlayer
} from './components';
 
import './Home.less';
import {  } from './components/AudioVolume';

const HomePresentation = ({ 
  isAudioLoading, 
  addAudioSource, 
  audioName,
  isAudioLoaded
}) => {

  return (
    <div className='home'>
      <div className="home__audio-navigation">
        <FileForm onFileChange={ addAudioSource } />
        
          <div className="home__audio-navigation">
            <div className="home__audio-list-wrapper">
              <AudioList />
            </div>
            <div className="home__header row">
            { isAudioLoaded && (
              <div className='col-md-12'>
                <span className='home__audio-title font-italic'>{ audioName }</span>
              </div>
              )
            }
            </div>
          </div>
        { isAudioLoading && ( <SpinnerOverlay />) }
      </div>
      <AudioPlayer />
    </div>
  );
};

export { HomePresentation };