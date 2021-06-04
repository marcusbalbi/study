import React from "react";
import { Field, reduxForm } from "redux-form";
const StreamCreate = (props) => {
  function renderInput(formProps) {
    return <input {...formProps.input} />;
  }

  return (
    <form>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </form>
  );
};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
