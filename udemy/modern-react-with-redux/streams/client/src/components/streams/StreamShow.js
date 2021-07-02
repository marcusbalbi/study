import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "../../store/actions";
const StreamShow = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);
  const stream = useSelector((state) => state.streams[match.params.id]);
  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
