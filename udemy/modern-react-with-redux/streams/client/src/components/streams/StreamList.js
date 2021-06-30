import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStreams } from "../../store/actions";

const StreamList = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchStreams());
  }, [dispath]);
  return <h2>List Streams</h2>;
};

export default StreamList;
