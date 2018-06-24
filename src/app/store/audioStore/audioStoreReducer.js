import { AUDIO_ADD_AUDIO_SOURCE_ACTION } from './audioStoreActions';

const initialState = {
  isSourceProvided: false,
  isLoading: false,
  source: {}
};

export const audioReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case AUDIO_ADD_AUDIO_SOURCE_ACTION:
      
      return Object.assign({}, prevState, {
        source: action.payload,
        isSourceProvided: true,
        isLoading: true
      });

    default:
      return prevState;
  }
};