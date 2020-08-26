// Action Creator
export const selectedSong = song => {
  // Return an object
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
