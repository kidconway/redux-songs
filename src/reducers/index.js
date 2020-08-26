import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Satisfaction", duration: "3:05" },
    { title: "I want it that way", duration: "4:00" },
    { title: "All-Star", duration: "too long" },
    { title: "Let there be Rock", duration: "8:24" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
