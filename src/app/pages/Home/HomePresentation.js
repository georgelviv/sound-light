import React from 'react';
import { FileForm } from './components';
import { Spinner } from 'shared';

import './Home.css';

const HomePresentation = ({ isAudioSourceProvided, isAudioLoading, addAudioSource, audioName }) => {

  return (
    <div className="home">
      { !isAudioSourceProvided 
        ? (
          <div>
            <h2>Please choose audio file</h2>
            <FileForm onFileChange={ addAudioSource } />
          </div>
          )
        : null 
      }
      { isAudioLoading 
        ? (
          <div>
            Loading <span className="font-italic">{ audioName }</span>
            <Spinner />
          </div>
          )
        : null 
      }  
    </div>
  );
};

export { HomePresentation };