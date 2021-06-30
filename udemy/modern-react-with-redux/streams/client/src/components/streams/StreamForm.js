import React, { useCallback } from "react";
import { Field, reduxForm } from "redux-form";

const StreamForm = ({ onSubmit, handleSubmit, title  }) => {
  const renderInput = useCallback(({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.error && meta.touched && (
          <div className="ui pointing red basic label">{meta.error}</div>
        )}
      </div>
    );
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form">
      <h2>{title || ""}</h2>
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
  return errors;
}

export default reduxForm({
  form: "StreamForm",
  validate: validate,
})(StreamForm);
