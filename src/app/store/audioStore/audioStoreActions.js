import { audioService, FileService } from 'shared';
import {
  audioAddAudioSourceAction,
  audioAddAudioSourceSuccessAction,
  stopAudioAction,
  playAudioAction
} from './audioStoreAcionTypes';

export const audioAddAudioSource = (source) => {
  return (dispatch) => {
    dispatch(audioAddAudioSourceAction(source));

    FileService.readFileAsBuffer(source)
      .then(audioService.loadAudio)
      .then(() => {
        dispatch(audioAddAudioSourceSuccessAction(source));
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