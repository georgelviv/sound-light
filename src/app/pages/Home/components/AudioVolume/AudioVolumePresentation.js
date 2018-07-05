import React from 'react';
import './AudioVolume.less';

const AudioVolumePresentation = ({ audioVolumeLevel, setVolumeLevelAudio }) => {
  let elRef;
  const getElRef = (el) => elRef = el;
  const onChange = () => {
    setVolumeLevelAudio(elRef.value);
  };

  return (
    <div className="audio-volume">
      <input
        ref={ getElRef }
        onChange={ onChange }
        type="range" 
        className="custom-range"
        min="0" max="1" step="0.1" 
        name="volume-value"
        value={ audioVolumeLevel }
        id="volume-value" />
    </div>
  );
}

export { AudioVolumePresentation }