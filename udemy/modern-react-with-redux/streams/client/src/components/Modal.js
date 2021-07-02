import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

const Modal = (props) => {
  const history = useHistory();
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Remover Stream</div>
        <div className="content">
          Tem certeza que deseja excluir esta Stream ?
        </div>
        <div className="actions">
          <button className="ui button primary">Remover</button>
          <button className="ui button">Cancelar</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
