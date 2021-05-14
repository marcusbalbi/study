import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Paranoid", duration: "4:05" },
    { title: "Iron man", duration: "5:10" },
    { title: "Number of the Beast", duration: "4:45" },
    { title: "Fear of the Dark", duration: "2:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    console.log("new selected song", action);
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
