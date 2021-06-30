import React, { useCallback } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { createStream } from "../../store/actions";
import { useHistory } from "react-router-dom";

const StreamCreate = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
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

  function onSubmit(formValues) {
    const result = dispatch(createStream(formValues));
    result.then(() => {
      history.push("/");
    }).catch(err => {
      console.log("Falha ao gravar Stream: " + err.message);
    });
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