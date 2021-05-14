import React from "react";
import { useSelector } from "react-redux";
const SongsList = () => {
  const songs = useSelector((state) => state.songs);

  function renderList() {
    return songs.map((song) => {
      return (
        <div className="item" key={songs.title}>
          <div className="right floated content">
            <button className="ui primary button"> Select </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  return (
    <div className="ui divided list" >
      {renderList()}
    </div>
  );
};

export default SongsList;
