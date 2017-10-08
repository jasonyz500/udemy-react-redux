import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // all properties of field.input (object) present in input
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // values: {title: 'asdf', categories: 'asdf', content: 'asdf'}
  const errors = {};
  // logic to validate 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters.';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories.';
  }
  if (!values.content) {
    errors.content = 'Enter some content.';
  }
  // if errors is empty, no errors
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);