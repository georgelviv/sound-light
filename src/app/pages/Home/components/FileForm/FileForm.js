import React from 'react';

const FileForm = ({ onFileChange }) => {
  const onChange = (event) => {
    onFileChange(event.target.files[0]);
  };

  return (
    <form>
      <div className="custom-file">
        <input type="file" 
          className="custom-file-input" 
          name="audio-file"
          id="audio-file"
          accept=".mp3,audio/*"
          onChange={ onChange } />
        <label className="custom-file-label" htmlFor="audio-file">Choose file</label>
      </div>
    </form>
  );
};

export { FileForm };