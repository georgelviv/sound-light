import React from 'react';
import { Home } from 'pages';
import './Layout.css';

const Layout = () => {

  return (
    <div className="layout">
      <div className="container">
        <h1>Sound Light</h1>
        <hr />
        <Home />
      </div>  
    </div>
  );
};

export { Layout };