class AudioFile {
  constructor(file) {
    this.file = file;
    this.name = file.name;
    this.isPlaying = false;
    this.audioTime = 0;
  }

  provideBuffer(buffer) {
    this.buffer = buffer;
    this.duration = buffer.duration;
  }

  setupBufferSource(bufferSource) {
    this.bufferSource = bufferSource;
    this.bufferSource.buffer = this.buffer;
  }

  play(destination) {
    this.bufferSource.connect(destination);
    this.bufferSourceStart = new Date();
    this.bufferSource.start(0, this.audioTime);
  }

  stop(destination) {
    this.bufferSource.disconnect(destination);
    this.bufferSource.stop();
    this.audioTime = 0;
  }

  pause(destination) {
    this.bufferSource.disconnect(destination);
    this.bufferSource.stop();
    this.audioTime = this.audioTime + Math.round((new Date() - this.bufferSourceStart) / 1000);
  }


}

export { AudioFile };