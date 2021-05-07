import React from "react";

const VideoItem = ({ video, onClick }) => {
  return (
    <li onClick={onClick}>
      <img src={video.thumbnails.default.url} alt={video.title} />
      <span>{video.title}</span>
    </li>
  );
};

export default VideoItem;
