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
        <div className="header">{props.title || "Modal"}</div>
        <div className="content">{props.message || ""}</div>
        <div className="actions">
          {props.actions || ""}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
