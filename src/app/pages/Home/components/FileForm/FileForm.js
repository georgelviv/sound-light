import React from 'react';

const FileForm = ({ onFileChange }) => {
  const onChange = (event) => {
    onFileChange(event.target.files[0]);
  };

  return (
    <form>
      <div className="form-group">
        <div className="row">
          <div className="col-2">
            <label htmlFor="audio-file">Audio file</label>
          </div>
          <div className="col-10">
            <input 
              className="form-control-file" 
              type="file" 
              id="audio-file" 
              name="audio-file"
              onChange={ onChange } /> 
          </div> 
        </div>
      </div>
    </form>
  );
};

export { FileForm };