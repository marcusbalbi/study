import React from "react";
import { useSelector } from "react-redux";
const SongsList = () => {
  const songs = useSelector((state) => state.songs);
  console.log(songs);
  return (
    <ul>
      {songs.map((song) => {
        return (
          <li>
            {song.title} - {song.duration}
          </li>
        );
      })}
    </ul>
  );
};

export default SongsList;
