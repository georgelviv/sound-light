import { AudioFile } from './AudioFile';

class AudioService {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.isPlaying = false;
    this.loadAudio = this.loadAudio.bind(this);
    this.onAudioEnded = this.onAudioEnded.bind(this);
  }

  loadAudio(readedFile, callBacks) {
    this.callBacks = callBacks;
    return new Promise((resolve, reject) => {
      if (this.isPlaying) {
        this.stopAudio();
      }

      this.audioFile = new AudioFile(readedFile.file, this.onAudioEnded);

      this.audioCtx.decodeAudioData(readedFile.buffer, (buffer) => {
        this.audioFile.provideBuffer(buffer);
        resolve(this.audioFile);
      })
    });
  }

  playAudio() {
    if (!this.isPlaying) {
      this.audioFile.setupBufferSource(this.audioCtx.createBufferSource());
      this.audioFile.play(this.audioCtx.destination);
      this.isPlaying = true;
    }
  }

  stopAudio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.audioFile.stop(this.audioCtx.destination);
      if (this.callBacks.onStopAudioCb) {
        this.callBacks.onStopAudioCb();
      }
    }
  }

  pauseAudio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.audioFile.pause(this.audioCtx.destination);
    }
  }

  getCurretAudioFile() {
    return this.audioFile;
  }

  onAudioEnded() {
    this.isPlaying = false;
    if (this.callBacks.onAudioEndedCb) {
      this.callBacks.onAudioEndedCb();
    }
  }
}

const audioService = new AudioService();

export { AudioService, audioService };