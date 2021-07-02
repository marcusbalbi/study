import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
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
  return (
    <div>
      Delete a Stream
      <Modal
        title="Remover Stream"
        message="Tem certeza que deseja excluir esta Stream ?"
        actions={renderActions()}
      />
    </div>
  );
};

export default StreamDelete;
