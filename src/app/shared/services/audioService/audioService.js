class AudioService {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.isPlaying = false;
    this.loadAudio = this.loadAudio.bind(this);
  }

  loadAudio(audioBuffer) {
    return new Promise((resolve, reject) => {
      this.audioCtx.decodeAudioData(audioBuffer, (buffer) => {
        this.currentBuffer = buffer;
        resolve();
      })
    });
  }

  playAudio() {
    if (!this.isPlaying) {
      this.currentSource = this.audioCtx.createBufferSource();
      this.currentSource.buffer = this.currentBuffer;
      this.currentSource.connect(this.audioCtx.destination);
      this.currentSource.start(0);
      this.isPlaying = true;
    }
  }

  stopAudio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.currentSource.disconnect(this.audioCtx.destination);
      this.currentSource.stop();
    }
  }
  
}

const audioService = new AudioService();

export { AudioService, audioService };