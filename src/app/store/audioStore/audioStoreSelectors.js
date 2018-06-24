export const audioStoreSelector = (store) => store.audio;

export const audioFileNameSelector = (store) => {
  const audiStore = audioStoreSelector(store);
  return audiStore.audioFile.fileName;
};

export const audioFileDurationSelector = (store) => {
  const audiStore = audioStoreSelector(store);
  return Math.ceil(audiStore.audioFile.duration);
};

export const audioIsLoadingSelector = (store) => {
  const audioStore = audioStoreSelector(store);
  return audioStore.isSourceProvided && !audioStore.isLoaded;
};
