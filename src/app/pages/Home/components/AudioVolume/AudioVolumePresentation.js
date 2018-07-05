import React from 'react';
import './AudioVolume.less';

const AudioVolumePresentation = () => {
  return (
    <div className="audio-volume">
      <input 
        type="range" 
        class="custom-range"
        min="0" max="1" step="0.1" 
        name="volume-value"
        id="volume-value" />
    </div>
  );
}

export { AudioVolumePresentation }