import React from 'react';
import { Spinner } from 'shared';
import { FileForm, AudioActions, AudioProgress } from './components';
 
import './Home.less';

const HomePresentation = ({ 
  isAudioSourceProvided, 
  isAudioLoading, 
  addAudioSource, 
  audioName,
  isAudioLoaded
}) => {

  return (
    <div className='home'>
      { !isAudioSourceProvided && (
          <div>
            <h2>Please choose audio file</h2>
            <FileForm onFileChange={ addAudioSource } />
          </div>
          ) 
      }
      { isAudioLoading && (
          <div>
            <Spinner />
          </div>
          )
      }
      { isAudioLoaded && (
          <div>
            <div className='home__title'>
              <span className='font-italic'>{ audioName }</span>
            </div>
            <div className='home__progress'>
              <AudioProgress />
            </div>
            <div className="home__actions">
              <AudioActions />
            </div>
          </div>
          )
      }  
    </div>
  );
};

export { HomePresentation };