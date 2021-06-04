import React from "react";
import { Field, reduxForm } from "redux-form";
const StreamCreate = (props) => {
  function renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  return (
    <form className="ui form" >
      <Field name="title" component={renderInput} label="Titulo:" />
      <Field name="description" component={renderInput} label="Descrição:" />
    </form>
  );
};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
