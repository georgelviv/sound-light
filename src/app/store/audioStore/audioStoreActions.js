import { audioService, FileService } from 'shared';
import {
  audioAddAudioSourceAction,
  audioAddAudioSourceSuccessAction,
  stopAudioAction,
  playAudioAction,
  pauseAudioAction
} from './audioStoreAcionTypes';

export const audioAddAudioSource = (source) => {
  return (dispatch) => {
    dispatch(audioAddAudioSourceAction(source));

    FileService.readFileAsBuffer(source)
      .then(audioService.loadAudio)
      .then((audioFile) => {
        dispatch(audioAddAudioSourceSuccessAction(audioFile));
      });
  }
}

export const stopAudio = () => {
  return (dispatch) => {
    audioService.stopAudio();

    dispatch(stopAudioAction());
  }
}

export const playAudio = () => {
  return (dispatch) => {
    audioService.playAudio();

    dispatch(playAudioAction());
  }
}

export const pauseAudio = () => {
  return (dispatch) => {
    audioService.pauseAudio();

    dispatch(pauseAudioAction());
  }
}