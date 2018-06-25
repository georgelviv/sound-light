import React, { Component } from 'react';
import { converSecondsInMinutes } from 'shared';

import './AudioProgress.less';

class AudioProgressPresentation extends Component {
  constructor(props) {
    super(props);

    const currentTime = this.getCurrentTime();
    this.state = { currentTime };

    this.progressBarElGet = (el) => {
      this.progressBarEl = el;
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isPlaying !== this.props.isPlaying) {
      if (this.props.isPlaying) {
        this.step();
      }

      const currentTime = this.getCurrentTime();
      this.setState({ currentTime });
    }
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.offsetWidth = this.progressBarEl.parentElement.offsetWidth;
    if (this.props.isPlaying) {
      this.step();
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  getCurrentTime() {
    return this.props.audioFile.getCurrentTime() / 1000;
  }

  step() {
    requestAnimationFrame(() => {
      if (!this.props.isPlaying || !this.isComponentMounted) {
        return;
      }
      const currentTime = this.props.audioFile.getCurrentTime() / 1000;
      if (currentTime === this.state.currentTime) {
        this.step();
      } else {
        this.setState({ currentTime }, () => {
          this.step();
        });
      }
    });
  }

  getProgressInPx(current, duration) {
    const percentage = current / duration;
    const px = Math.min(Math.round(this.offsetWidth * percentage), this.offsetWidth);
    return px;
  }

  render() {
    const formatedDuration = converSecondsInMinutes(Math.ceil(this.props.duration));
    const formatedCurrentTime = converSecondsInMinutes(Math.floor(this.state.currentTime));
    const progressInPx = this.getProgressInPx(this.state.currentTime, this.props.duration);

     return (
      <div className="audio-progress">
        <div className="audio-progress__current-time">
          { formatedCurrentTime }
        </div>
        <div className="audio-progress__bar-wrapper progress">
          <div
            ref={ this.progressBarElGet }
            className="audio-progress__bar progress-bar" 
            role="progressbar" 
            style={ { width: `${ progressInPx }px`} }>
          </div>
        </div>
        <div className="audio-progress__duration">
          { formatedDuration }
        </div>
      </div>
    );
  }
};

export { AudioProgressPresentation };