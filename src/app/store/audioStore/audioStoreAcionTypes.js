export const AUDIO_ADD_AUDIO_SOURCE_ACTION = "[AUDIO] Add audio source";
export const AUDIO_ADD_AUDIO_SOURCE_SUCCESS_ACTION = "[AUDIO] Add audio source success";
export const AUDIO_STOP_AUDIO_ACTION = "[AUDIO] Stop audio";
export const AUDIO_PLAY_AUDIO_ACTION = "[AUDIO] Play audio";

export const audioAddAudioSourceAction = (source) => {
  return {
    type: AUDIO_ADD_AUDIO_SOURCE_ACTION,
    payload: source
  }
}

export const audioAddAudioSourceSuccessAction = (source) => {
  return {
    type: AUDIO_ADD_AUDIO_SOURCE_SUCCESS_ACTION,
    payload: source
  }
}

export const stopAudioAction = () => {
  return {
    type: AUDIO_STOP_AUDIO_ACTION
  }
}

export const playAudioAction = () => {
  return {
    type: AUDIO_PLAY_AUDIO_ACTION
  }
}