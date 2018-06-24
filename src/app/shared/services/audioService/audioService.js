class AudioService {
  constructor() {
    this._initAudioContext();
  }

  _initAudioContext() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

console.log(AudioService);

export { AudioService };