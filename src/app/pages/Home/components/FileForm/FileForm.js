import React from 'react';

const FileForm = ({ onFileChange }) => {
  const onChange = (event) => {
    onFileChange(event.target.files[0]);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="audio-file">Choose audio file</label>
        <input 
          className="form-control-file" 
          type="file" 
          id="audio-file" 
          name="audio-file"
          onChange={ onChange } /> 
      </div>
    </form>
  );
};

export { FileForm };