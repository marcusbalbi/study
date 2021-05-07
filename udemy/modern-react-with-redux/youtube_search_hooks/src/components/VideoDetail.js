import React from "react";

const VideoDetail = ({ selected }) => {
  if (selected === null) {
    return <div />;
  }
  return (
    <div className="video-detail">
      <h3>{selected.title}</h3>
      <iframe
        title="video player"
        width="853"
        height="480"
        src={selected.link}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoDetail;
