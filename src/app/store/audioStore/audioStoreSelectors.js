export const audioStoreSelector = (store) => store.audio;
export const audioFileNameSelector = (store) => {
  return store.audio.source.name;
};