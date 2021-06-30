import React from "react";
import { useSelector } from "react-redux";

const StreamEdit = (props) => {
  console.log(props.match.params.id);
  const stream = useSelector((state) => state.streams[props.match.params.id]);
  return <h2>Edit a Stream: {JSON.stringify(stream)}</h2>;
};

export default StreamEdit;
