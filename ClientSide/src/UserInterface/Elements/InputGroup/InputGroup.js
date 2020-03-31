import React, { Fragment, useState, useEffect, useCallback } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

function indexOf(values, value) {
  let valueIndex = values.indexOf(value);
  return valueIndex;
}

export default function InputGroup({
  name,
  id,
  disabled,
  placeholder,
  onChange,
  validations
}) {
  const [getErrors, setErrors] = useState([]);

  useEffect(() => {
    setErrors([]);
  }, []);

  useEffect(() => {
    handlevalidations(validations);
    renderError();
  }, [getErrors, validations]);

  const handleError = useCallback((errors = [], error, ok, dirty, name) => {
    let prevError = [];
    prevError = errors;
    if (error) {
      if (indexOf(errors, error) > -1) {
        return prevError;
      }
      prevError.push(error);
    }
    return prevError;
  }, []);

  const handlevalidations = useCallback(
    validations => {
      let { error, ok, dirty, name } = [""];
      validations.map(validate => {
        error = validate["error"];
        ok = validate["ok"];
        dirty = validate["dirty"];
        name = validate["name"];
        let errors = handleError(getErrors, error, ok, dirty, name);
        addError(errors);
      });
    },
    [validations, getErrors]
  );

  const addError = useCallback(error => setErrors(error), []);

  const renderError = useCallback(() => {
    return <Error errors={getErrors} />;
  }, [getErrors]);

  return (
    <Fragment>
      <div>
        <input
          placeholder={placeholder}
          disabled={disabled}
          id={id}
          name={name}
          onChange={e => onChange(e.target.value)}
        />
        <br />
        {getErrors.length > 0 ? renderError() : null}
      </div>
    </Fragment>
  );
}

InputGroup.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  validations: PropTypes.array
};
