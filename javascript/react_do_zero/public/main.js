"use strict";

var Mybtn = function Mybtn(props) {
  return React.createElement("button", {
    onClick: props.onClick
  }, props.name);
};

var template = React.createElement("h2", null, "TESTE REACT DO ZERO", React.createElement(Mybtn, {
  name: "TESTE  ",
  onClick: function onClick() {
    alert('ola REACT');
  }
}));
ReactDOM.render(template, document.querySelector('#app'));
