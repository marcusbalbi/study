import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import React from "react";
import useVideos from "./hooks/useVideos";

const App = () => {
  const { selectedVideo, videosList, search, setSelectedVideo } = useVideos({
    debounceTime: 500,
    defaultTerm: "Balbi"
  });

  if (videosList.length <= 0) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="app">
      <SearchBar onSearch={search} />
      <div className="content">
        <VideoDetail selected={selectedVideo} />
        <VideoList onVideoSelected={setSelectedVideo} list={videosList} />
      </div>
    </div>
  );
};

export default App;
