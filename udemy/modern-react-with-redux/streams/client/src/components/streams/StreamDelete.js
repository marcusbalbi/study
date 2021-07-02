import React, { useEffect } from "react";
import Modal from "../Modal";
import { useHistory } from "react-router-dom";
import { fetchStream } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const StreamDelete = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match.params.id]);
  const renderActions = () => {
    return (
      <>
        <button className="ui button negative" onClick={() => {}}>
          Remover
        </button>
        <button className="ui button" onClick={() => {}}>
          Cancelar
        </button>
      </>
    );
  };
    const stream = useSelector((state) => state.streams[match.params.id]);
    if (!stream) {
      return <div>Loading...</div>;
    }
  return (
    <Modal
      title="Remover Stream"
      message={`Tem certeza que deseja excluir a Stream ${stream.title} ?`}
      actions={renderActions()}
      onDismiss={() => {
        history.push("/");
      }}
    />
  );
};

export default StreamDelete;
