class AudioFile {
  static INTERVAL = 50;

  constructor(file, onEndCb) {
    this.file = file;
    this.name = file.name;
    this.isPlaying = false;
    this.audioTime = 0;

    this.onEnd = this.onEnd.bind(this);
    this.onEndCb = onEndCb;
  }

  provideBuffer(buffer) {
    this.buffer = buffer;
    this.duration = buffer.duration;
  }

  setupBufferSource(bufferSource) {
    this.bufferSource = bufferSource;
    this.bufferSource.buffer = this.buffer;
    this.bufferSource.onended = this.onEnd;
  }

  play(destination) {
    this.bufferSource.connect(destination);
    this.bufferSource.start(0, this.audioTime / 1000);
    this.initInterval();
  }

  stop(destination) {
    this.bufferSource.disconnect(destination);
    this.bufferSource.stop();
    this.stopInterval();
    this.audioTime = 0;
  }

  pause(destination) {
    this.bufferSource.disconnect(destination);
    this.bufferSource.stop();
    this.stopInterval();
  }

  initInterval() {
    this.stopInterval();
    let prevTime = new Date();
    this.clock = setInterval(() => {
      prevTime = this.intervalStep(prevTime);
    }, AudioFile.INTERVAL);
  }

  stopInterval() {
    clearInterval(this.clock);
  }

  intervalStep(prevTime) {
    const currentTime = new Date();
    const diffTime = currentTime - prevTime;
    this.audioTime += diffTime;
    return currentTime;
  }

  getCurrentTime() {
    return this.audioTime;
  }

  onEnd() {
    this.isPlaying = false;
    this.stopInterval();
    this.audioTime = 0;

    if (this.onEndCb) {
      this.onEndCb();
    }
  }


}

export { AudioFile };