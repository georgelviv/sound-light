import React from 'react';
import './AudioActions.less';

const AudioActionsPresentation = ({ 
  stopAudio,
  playAudio,
  pauseAudio,
  isAudioPlaying,
  isSourceProvided
}) => {
  return (
    <div className="audio-actions">
      <button type="button" 
        onClick={ playAudio }
        className="btn btn-dark audio-actions__btn"
        disabled={ isAudioPlaying || !isSourceProvided }>
        <i className="fas fa-play"></i>
      </button>
      <button type="button"
        onClick={ pauseAudio }
        className="btn btn-dark audio-actions__btn"
        disabled={ !isAudioPlaying }>
        <i className="fas fa-pause"></i>
      </button>
      <button type="button" 
        onClick={ stopAudio }
        className="btn btn-dark audio-actions__btn"
        disabled={ !isAudioPlaying }>
        <i className="fas fa-stop"></i>
      </button>
    </div>
  );
};

export { AudioActionsPresentation };