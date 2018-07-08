import React from 'react';
import { Spinner } from 'shared';
import './SpinnerOverlay.less';

const SpinnerOverlay = () => {
  return (
    <div className="spinner-overlay">
      <Spinner />
      <div className="spinner-overlay__background"></div>
    </div>
  );
}

export { SpinnerOverlay };