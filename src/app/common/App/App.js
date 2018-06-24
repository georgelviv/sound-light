import React, { Component } from 'react';
import './App.css';

import { AudioService } from 'shared';
import { Layout } from 'common';

console.log(new AudioService());

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout />
      </div>
    );
  }
}

export { App };
