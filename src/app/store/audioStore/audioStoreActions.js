import { audioService, FileService } from 'shared';
import {
  audioAddAudioSourceAction,
  audioAddAudioSourceSuccessAction,
  stopAudioAction,
  playAudioAction,
  pauseAudioAction,
  setVolumeLevelAudioAction
} from './audioStoreAcionTypes';

export const audioAddAudioSource = (source) => {
  return (dispatch) => {
    dispatch(audioAddAudioSourceAction(source));


    const callbacks = {
      onStopAudioCb: () => {
        dispatch(stopAudioAction());
      },
      onAudioEndedCb: () => {
        dispatch(stopAudioAction());
      }
    };

    FileService.readFileAsBuffer(source)
      .then((file) => {
        return audioService.loadAudio(file, callbacks);
      })
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

export const setVolumeLevelAudio = (volumeLevel) => {
  return (dispatch) => {
    audioService.setVolume(volumeLevel);
    dispatch(setVolumeLevelAudioAction(volumeLevel));
  }
}