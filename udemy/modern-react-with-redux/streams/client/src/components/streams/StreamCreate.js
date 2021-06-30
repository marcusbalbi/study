import React from "react";
import { useDispatch } from "react-redux";
import { createStream } from "../../store/actions";
import { useHistory } from "react-router-dom";
import StreamForm from "./StreamForm";
const StreamCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(formValues) {
    const result = dispatch(createStream(formValues));
    result
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log("Falha ao gravar Stream: " + err.message);
      });
  }

  return <StreamForm onSubmit={onSubmit} title="Criar um Novo Stream" />;
};

export default StreamCreate;
