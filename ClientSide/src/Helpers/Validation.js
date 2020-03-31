export const maxValue = (count, value, name) => {
  let error = "";
  let dirty = false;
  let ok = false;
  if (value.length > 0) {
    dirty = true;
    if (dirty && value.length > count) {
      ok = false;
      error = `Value should not exceed ${count}`;
    } else {
      error = "";
      ok = true;
    }
  }
  return {
    name,
    count,
    value,
    error,
    dirty,
    ok
  };
};

export const minValue = (count, value, name) => {
  let error = "";
  let dirty = false;
  let ok = false;
  if (value.length > 0) {
    dirty = true;
    if (dirty && value.length < count) {
      error = `Value should not be less than ${count}`;
      ok = false;
    } else {
      error = "";
      ok = true;
    }
  }
  return {
    count,
    value,
    error,
    dirty,
    ok,
    name
  };
};

export const getKeys = content => {
  const keys = Object.keys(content);
  return keys;
};

export const getValues = content => {
  const keys = Object.values(content);
  return keys;
};
