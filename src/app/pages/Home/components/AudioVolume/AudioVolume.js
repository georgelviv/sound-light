import { connect } from 'react-redux';
import { AudioVolumePresentation } from './AudioVolumePresentation';
import { audioStoreSelector, setVolumeLevelAudio } from 'store';

const mapStateToProps = (state) => {
  const audioStore = audioStoreSelector(state);
  return {
    audioVolumeLevel: audioStore.volumeLevel
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVolumeLevelAudio: (volumeLevel) => {
      dispatch(setVolumeLevelAudio(volumeLevel));
    }
  }
}

const AudioVolume = connect(mapStateToProps, mapDispatchToProps)(AudioVolumePresentation);

export { AudioVolume } 