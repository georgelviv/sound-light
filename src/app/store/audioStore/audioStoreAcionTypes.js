export const AUDIO_ADD_AUDIO_SOURCE_ACTION = "[AUDIO] Add audio source";
export const AUDIO_ADD_AUDIO_SOURCE_SUCCESS_ACTION = "[AUDIO] Add audio source success";
export const AUDIO_STOP_AUDIO_ACTION = "[AUDIO] Stop audio";
export const AUDIO_PLAY_AUDIO_ACTION = "[AUDIO] Play audio";
export const AUDIO_PAUSE_AUDIO_ACTION = "[AUDIO] Pause audio";
export const AUDIO_SET_VOLUME_LEVEL_ACTION = "[AUDIO] Set volume level";

export const audioAddAudioSourceAction = (source) => {
  return {
    type: AUDIO_ADD_AUDIO_SOURCE_ACTION,
    payload: source
  }
}

export const audioAddAudioSourceSuccessAction = (audioFile) => {
  return {
    type: AUDIO_ADD_AUDIO_SOURCE_SUCCESS_ACTION,
    payload: audioFile
  }
}

export const stopAudioAction = (audioFile) => {
  return {
    type: AUDIO_STOP_AUDIO_ACTION,
    payload: audioFile
  }
}

export const playAudioAction = (audioFile) => {
  return {
    type: AUDIO_PLAY_AUDIO_ACTION,
    payload: audioFile
  }
}

export const pauseAudioAction = (audioFile) => {
  return {
    type: AUDIO_PAUSE_AUDIO_ACTION,
    payload: audioFile
  }
}
export const setVolumeLevelAudioAction = (volumeLevel) => {
  return  {
    type: AUDIO_SET_VOLUME_LEVEL_ACTION,
    payload: volumeLevel
  }
}