import React from 'react';
import './AudioActions.less';

const AudioActions = ({ onPlayClick, onStopClick }) => {
  return (
    <div className="audio-actions">
      <button type="button" 
        onClick={ onPlayClick }
        className="btn btn-dark audio-actions__btn">
        <i className="fas fa-play"></i>
      </button>
      <button type="button" 
        onClick={ onStopClick }
        className="btn btn-dark audio-actions__btn">
        <i className="fas fa-stop"></i>
      </button>
    </div>
  );
};

export { AudioActions };