import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../store/actions";

const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);
  const stream = useSelector((state) => state.streams[match.params.id]);
  if (!stream) {
    return <div>Loading...</div>
  }
  return <h2>Edit a Stream: {JSON.stringify(stream)}</h2>;
};

export default StreamEdit;
