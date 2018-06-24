import React, { Component } from 'react';

class AudioProgressPresentation extends Component {
  constructor(props) {
    super(props);

    this.progressBarElGet = (el) => {
      this.progressBarEl = el;
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.props.isPlaying 
        ? this.initProgress()
        : this.stopProgress();
    }
  }

  componentDidMount() {
    if (this.props.isPlaying) {
      this.initProgress();
    }
  }

  initProgress() {
    console.log('inited', this.progressBarEl);
  }

  stopProgress() {
    console.log('stopped');
  }

  render() {
    const { duration } = this.props;
     return (
      <div className="progress">
        <div
          ref={ this.progressBarElGet }
          className="progress-bar" 
          role="progressbar" 
          style={ { width: '25%'} }>
          { duration }
        </div>
      </div>
    );
  }
};

export { AudioProgressPresentation };