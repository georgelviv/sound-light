class AudioService {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.source = this.audioCtx.createBufferSource();

    this.listenAudio = this.listenAudio.bind(this);
  }

  listenAudio(audioBuffer) {
    console.log(this.source);
    this.audioCtx.decodeAudioData(audioBuffer, (buffer) => {
      this.source.buffer = buffer;
      this.source.connect(this.audioCtx.destination);
      this.source.start(0);
    })
  }
}

const audioService = new AudioService();

export { AudioService, audioService };