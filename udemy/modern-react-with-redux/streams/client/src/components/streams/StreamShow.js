import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../store/actions";
import flv from "flv.js";

const StreamShow = ({ match }) => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const stream = useSelector((state) => state.streams[match.params.id]);
  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (stream) {
      const player = flv.createPlayer({
        type: "flv",
        // http://localhost:8000/live/STREAM_NAME.flv
        url: `http://localhost:8000/live/${stream.id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();

      return () => {
        player.destroy();
      }
    }
  }, [stream]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
