import { useEffect, useState } from "react";
import youtubeSearch from "youtube-search";
import _ from "lodash";

const useVideos = ({ debounceTime, defaultTerm }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = _.debounce((term) => {
    searchVideos(term);
  }, debounceTime || 500);

  const searchVideos = (term) => {
    youtubeSearch(
      term,
      { key: window.YOUTUBE_KEY, maxResults: 10 },
      (err, res) => {
        if (!res) {
          return [];
        }
        const videos = res.filter((item) => {
          item.link = item.link.replace("watch?v=", "embed/");
          return item.kind.includes("video");
        });
        setVideosList(videos);
        if (videos[0]) {
          setSelectedVideo(videos[0]);
        }
      }
    );
  };

  return { selectedVideo, videosList, search, setSelectedVideo };
};

export default useVideos;
