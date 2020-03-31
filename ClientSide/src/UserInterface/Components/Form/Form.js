import React from "react";
import PropTypes from "prop-types";
import validation from "./validation";
import { stateSchema, stateValidatorSchema } from "./Form.constants";

const Form = ({ stateSchema, validatorSchema }) => {
  const stateSchemas = stateSchema;
  const validatorSchemas = validatorSchema;

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const {
    values,
    errors,
    dirty,
    handleOnChange,
    handleOnSubmit,
    disable
  } = validation(stateSchemas, validatorSchemas, onSubmitForm);

  const { first_name, last_name, tags } = values;

  return (
    <form className="my-form" onSubmit={handleOnSubmit}>
      <div className="form-item">
        <label htmlFor="first_name">
          First name:
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleOnChange}
          />
        </label>
        {errors.first_name && dirty.first_name && (
          <p className="error">{errors.first_name}</p>
        )}
      </div>

      <div className="form-item">
        <label htmlFor="last_name">
          Last name:
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleOnChange}
          />
        </label>
        {errors.last_name && dirty.last_name && (
          <p className="error">{errors.last_name}</p>
        )}
      </div>

      <div className="form-item">
        <label htmlFor="tags">
          Tags:
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={handleOnChange}
          />
        </label>
        {errors.tags && dirty.tags && <p className="error">{errors.tags}</p>}
      </div>
      <input type="submit" name="submit" disabled={disable} />
    </form>
  );
};

Form.propTypes = {
  stateSchema: PropTypes.object,
  validatorSchema: PropTypes.object
};

Form.defaultProps = {
  stateSchema: stateSchema,
  validatorSchema: stateValidatorSchema
};

export default Form;
