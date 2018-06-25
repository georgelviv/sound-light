import { connect } from 'react-redux';
import { AudioProgressPresentation } from './AudioProgressPresentation';
import { 
  audioFileDurationSelector,
  audioStoreSelector
} from 'store';

const mapStateToProps = (state) => {
  const audioStore = audioStoreSelector(state);
  return {
    duration: audioFileDurationSelector(state),
    isPlaying: audioStore.isPlaying,
    audioFile: audioStore.audioFile
  };
}

const AudioProgress = connect(mapStateToProps)(AudioProgressPresentation);

export { AudioProgress };