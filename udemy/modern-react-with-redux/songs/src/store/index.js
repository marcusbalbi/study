import { createStore, combineReducers } from "redux";

const INITIAL_LIST = [
  { name: "Paranoid", group: "Black Sabath" },
  { name: "Rock n Roll", group: "Led Zeppelin" },
];

const songList = (songs = INITIAL_LIST, action) => {
  return songs;
};


const selectedSong = (selected = null, action) => {
  return selected;
};

const store = createStore(
  combineReducers({
    songs: songList,
    selected: selectedSong,
  })
);

export default store;
