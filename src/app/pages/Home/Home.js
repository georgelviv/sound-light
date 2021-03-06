import { connect } from 'react-redux';

import { 
  audioStoreSelector,
  audioAddAudioSource,
  audioFileNameSelector,
  audioIsLoadingSelector,
} from 'store';

import { HomePresentation } from './HomePresentation';

const mapStateToProps = (state) => {
  const audioStore = audioStoreSelector(state);
  return { 
    isAudioSourceProvided: audioStore.isSourceProvided,
    isAudioLoading: audioIsLoadingSelector(state),
    isAudioLoaded: audioStore.isLoaded,
    audioName: audioFileNameSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAudioSource: (source) => {
      dispatch(audioAddAudioSource(source));
    }
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomePresentation);

export { Home };