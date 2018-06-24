import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Layout } from 'common';
import { store } from 'store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <Layout />
        </div>
      </Provider>
    );
  }
}

export { App };
