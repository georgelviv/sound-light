class AudioService {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.isPlaying = false;
    this.loadAudio = this.loadAudio.bind(this);
    this.audioTime = 0;
  }

  loadAudio(readedFile) {
    return new Promise((resolve, reject) => {
      this.audioCtx.decodeAudioData(readedFile.buffer, (buffer) => {
        this.currentBuffer = buffer;
        resolve({
          fileName: readedFile.file.name,
          type: readedFile.file.type,
          duration: buffer.duration
        });
      })
    });
  }

  playAudio() {
    if (!this.isPlaying) {
      this.currentSource = this.audioCtx.createBufferSource();
      this.currentSource.buffer = this.currentBuffer;
      this.currentSource.connect(this.audioCtx.destination);
      this.currentSourceStart = new Date();
      this.currentSource.start(0, this.audioTime);
      this.isPlaying = true;
    }
  }

  stopAudio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.currentSource.disconnect(this.audioCtx.destination);
      this.currentSource.stop();
      this.audioTime = 0;
    }
  }

  pauseAudio() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.currentSource.disconnect(this.audioCtx.destination);
      this.currentSource.stop();
      this.audioTime = this.audioTime + Math.round((new Date() - this.currentSourceStart) / 1000);
    }
  }
  
}

const audioService = new AudioService();

export { AudioService, audioService };