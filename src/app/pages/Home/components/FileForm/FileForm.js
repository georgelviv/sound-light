import React from 'react';

const FileForm = ({ onFileChange }) => {
  const onChange = (event) => {
    onFileChange(event.target.files[0]);
  };

  return (
    <form>
      <div class="custom-file">
        <input type="file" class="custom-file-input" 
          name="audio-file"
          id="audio-file"
          accept=".mp3,audio/*"
          onChange={ onChange } />
        <label class="custom-file-label" for="audio-file">Choose file</label>
      </div>
    </form>
  );
};

export { FileForm };