import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import search from "youtube-search";
import _ from "lodash";
import React, { useEffect, useState } from "react";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const doSearch = _.debounce((term) => {
    searchVideos(term);
  }, 500);

  const searchVideos = (term) => {
    search(term, { key: window.YOUTUBE_KEY, maxResults: 10 }, (err, res) => {
      if (!res) {
        return [];
      }
      const videos = res.filter((item) => {
        item.link = item.link.replace("watch?v=", "embed/");
        return item.kind.includes("video");
      });
      setVideos(videos);
      if (videos[0]) {
        setSelected(videos[0]);
      }
    });
  };

  useEffect(() => {
    searchVideos("MBL");
  }, []);

  if (videos.length <= 0) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="app">
      <SearchBar onSearch={doSearch} />
      <div className="content">
        <VideoDetail selected={selected} />
        <VideoList
          onVideoSelected={(video) => {
            setSelected(video);
          }}
          list={videos}
        />
      </div>
    </div>
  );
};

export default App;
