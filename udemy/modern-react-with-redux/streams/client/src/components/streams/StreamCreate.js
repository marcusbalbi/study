import React, { useCallback } from "react";
import { Field, reduxForm } from "redux-form";

const StreamCreate = (props) => {
  const renderInput = useCallback(({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {meta.error && <div className="ui pointing red basic label">{meta.error}</div>}
      </div>
    );
  }, []);

  function onSubmit(formValues) {
    console.log(formValues);
  }

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
      <Field name="title" component={renderInput} label="Titulo:" />
      <Field name="description" component={renderInput} label="Descrição:" />
      <button type="submit" className="ui button positive large right floated">
        Salvar
      </button>
    </form>
  );
};

function validate(formValues) {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title is required!";
  }
  if (!formValues.description) {
    errors.description = "Description is required!";
  }
  console.log(errors);
  return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);
