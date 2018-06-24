class FileService {
  static readFileAsBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        resolve(result);
      };
  
      reader.readAsArrayBuffer(file);
    });
  }
};

export { FileService };