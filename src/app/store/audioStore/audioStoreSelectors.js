export const audioStoreSelector = (store) => store.audio;
export const audioFileNameSelector = (store) => {
  return store.audio.source.name;
};
export const audioIsLoadingSelector = (store) => {
  return store.audio.isSourceProvided && !store.audio.isLoaded;
};