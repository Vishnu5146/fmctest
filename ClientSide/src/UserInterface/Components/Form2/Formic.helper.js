import { useState, useEffect, useCallback } from "react";
import { stateValidatorSchema, REQUIRED_FIELD_ERROR } from "./Formic.constants";

function get_prop_values(stateSchema, prop) {
  return Object.keys(stateSchema).reduce((accumulator, curr) => {
    accumulator[curr] = !prop ? false : stateSchema[curr][prop];
    return accumulator;
  }, {});
}

function is_required(isRequired, value) {
  if (!value && isRequired) return REQUIRED_FIELD_ERROR;
  return "";
}

function is_object(value) {
  return typeof value === "object" && value !== null;
}

function is_array(value) {
  return typeof value === "array" && value !== null;
}

const useValidate = stateSchema => {
  const [getState, setState] = useState(stateSchema);
  const [getValue, setValue] = useState(get_prop_values(getState, "value"));
  const [getError, setError] = useState(get_prop_values(getState, "error"));
  const [getDirty, setDirty] = useState(get_prop_values(getState));
  const [getDisable, setDisable] = useState(true);

  useEffect(() => {
    setInitialErrorState();
  }, []);

  const onChange = useCallback(event => {
    const name = event.target.name;
    const value = event.target.value;

    const error = validateFormFields(name, value);
    setValue(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError(prevState => ({
      ...prevState,
      [name]: error
    }));
    setDirty(prevState => ({
      ...prevState,
      [name]: true
    }));
  });

  const validateFormFields = useCallback((key, value) => {
    const validatorSchema = stateValidatorSchema;
    if (!validatorSchema[key]) return;
    const field = validatorSchema[key];
    console.log(field);
    let error = "";
    error = is_required(field.required, value);
    if (is_array(field["validator"]) && error === "") {
      const fieldValidator = field["validator"];
      const func = fieldValidator["func"];
      console.log("func", func);
    }
    return error;
  });

  // Set Initial Error State
  // When hooks was first rendered...
  const setInitialErrorState = useCallback(() => {
    Object.keys(getError).map(name =>
      setError(prevState => ({
        ...prevState,
        [name]: validateFormFields(name, getValue[name])
      }))
    );
  }, [getError, getValue]);

  return {
    onChange,
    getValue,
    getError,
    getDirty,
    getDisable
  };
};

export default useValidate;
