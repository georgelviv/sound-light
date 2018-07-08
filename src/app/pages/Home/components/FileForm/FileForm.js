import React from 'react';
import './FileForm.less';

const FileForm = ({ onFileChange }) => {
  const onChange = (event) => {
    onFileChange(event.target.files[0]);
  };

  return (
    <form className="file-form">
      <div className="file-form__content row">
        <div className="col-md-8">
         <label htmlFor="audio-file">
          Add new audio
         </label>
        </div>
        <div className="col-md-4">
          <div className="custom-file">
          <input type="file" 
            className="custom-file-input file-form__input" 
            name="audio-file"
            id="audio-file"
            accept=".mp3,audio/*"
            onChange={ onChange } />
          <label className="custom-file-label" htmlFor="audio-file">Choose file</label>
        </div>
        </div>
      </div>
    </form>
  );
};

export { FileForm };