import React, { useEffect } from "react";
import Modal from "../Modal";
import { useHistory, Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../store/actions";
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
        <button
          className="ui button negative"
          onClick={() => {
            const result = dispatch(deleteStream(match.params.id));
            result
              .then(() => {
                history.push("/");
              })
              .catch((err) => {
                console.log("Falha ao excluir Stream: " + err.message);
              });
          }}
        >
          Remover
        </button>
        <Link to="/" className="ui button">
          Cancelar
        </Link>
      </>
    );
  };
  const stream = useSelector((state) => state.streams[match.params.id]);

  const renderMessage = () => {
    if (!stream) {
      return "Tem certeza que deseja excluir esta Stream ?";
    }
    return `Tem certeza que deseja excluir a Stream ${stream.title} ?`;
  };

  return (
    <Modal
      title="Remover Stream"
      message={renderMessage()}
      actions={renderActions()}
      onDismiss={() => {
        history.push("/");
      }}
    />
  );
};

export default StreamDelete;
