import { 
  AUDIO_ADD_AUDIO_SOURCE_ACTION,
  AUDIO_ADD_AUDIO_SOURCE_SUCCESS_ACTION,
  AUDIO_STOP_AUDIO_ACTION,
  AUDIO_PLAY_AUDIO_ACTION
} from './audioStoreAcionTypes';

const initialState = {
  isSourceProvided: false,
  isLoaded: false,
  source: {},
  isPlaying: false,
};

const createNewState = (prevState, newState) => {
  return Object.assign({}, prevState, newState);
};

export const audioReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case AUDIO_ADD_AUDIO_SOURCE_ACTION:
      
      return createNewState(prevState, {
        source: action.payload,
        isSourceProvided: true,
        isLoaded: false
      });

    case AUDIO_ADD_AUDIO_SOURCE_SUCCESS_ACTION:
      return createNewState(prevState, {
        isLoaded: true
      });

    case AUDIO_STOP_AUDIO_ACTION:
      return createNewState(prevState, {
        isPlaying: false
      });

    case AUDIO_PLAY_AUDIO_ACTION: 
      return createNewState(prevState, {
        isPlaying: true
      });

    default:
      return prevState;
  }
};