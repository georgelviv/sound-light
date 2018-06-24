import React from 'react';
import { FileForm } from './components';
import { Spinner } from 'shared';
import { AudioActions } from './components';
 
import './Home.less';

const HomePresentation = ({ 
  isAudioSourceProvided, 
  isAudioLoading, 
  addAudioSource, 
  audioName,
  isAudioLoaded,
  stopAudio,
  playAudio
}) => {

  return (
    <div className="home">
      { !isAudioSourceProvided && (
          <div>
            <h2>Please choose audio file</h2>
            <FileForm onFileChange={ addAudioSource } />
          </div>
          ) 
      }
      { isAudioLoading && (
          <div>
            Loading <span className="font-italic">{ audioName }</span>
            <Spinner />
          </div>
          )
      }
      { isAudioLoaded && (
          <div>
            Loaded <span className="font-italic">{ audioName }</span>
            <AudioActions onPlayClick={ playAudio } onStopClick={ stopAudio } />
          </div>
          )
      }  
    </div>
  );
};

export { HomePresentation };