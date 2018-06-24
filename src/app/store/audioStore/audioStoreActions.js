import { audioService, FileService } from 'shared';

export const AUDIO_ADD_AUDIO_SOURCE_ACTION = "[AUDIO] Add audio source";

export const audioAddAudioSourceAction = (source) => {
  return {
    type: AUDIO_ADD_AUDIO_SOURCE_ACTION,
    payload: source
  }
}

export const audioAddAudioSource = (source) => {
  return (dispatch) => {
    dispatch(audioAddAudioSourceAction(source));

    FileService.readFileAsBuffer(source)
      .then(audioService.listenAudio);
  }
}