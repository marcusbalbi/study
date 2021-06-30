import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStream, fetchStream } from "../../store/actions";
import { useHistory } from "react-router-dom";
import StreamForm from "./StreamForm";
const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);
  const stream = useSelector((state) => state.streams[match.params.id]);
  if (!stream) {
    return <div>Loading...</div>
  }
  function onSubmit(formValues) {
    const result = dispatch(editStream(stream.id, formValues));
    result
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log("Falha ao editar Stream: " + err.message);
      });
  }

  return <StreamForm onSubmit={onSubmit} title="Editar um Stream" initialValues={{ title: stream.title, description: stream.description}} />;
};

export default StreamEdit;
