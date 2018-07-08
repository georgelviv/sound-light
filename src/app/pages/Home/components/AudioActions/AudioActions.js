import { connect } from 'react-redux';

import { 
  stopAudio,
  playAudio,
  audioStoreSelector,
  pauseAudio
} from 'store';

import { AudioActionsPresentation } from './AudioActionsPresentation';

const mapStateToProps = (state) => {
  const audioStore = audioStoreSelector(state);
  return {
    isAudioPlaying: audioStore.isPlaying,
    isSourceProvided: audioStore.isSourceProvided
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stopAudio: () => {
      dispatch(stopAudio());
    },
    playAudio: () => {
      dispatch(playAudio());
    },
    pauseAudio: () => {
      dispatch(pauseAudio());
    }
  };
};

const AudioActions = connect(mapStateToProps, mapDispatchToProps)(AudioActionsPresentation);

export { AudioActions };