import React, { Component } from 'react';

import { audioService, FileService } from 'shared';
import { FileForm } from './components';

class Home extends Component {
  constructor(props) {
    super(props);


    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(file) {
    FileService.readFileAsBuffer(file)
      .then(audioService.listenAudio);
  }

  render() {
    return (
      <div className="home">
        <FileForm onFileChange={ this.onFileChange } />
      </div>
    );
  }
}

export { Home };