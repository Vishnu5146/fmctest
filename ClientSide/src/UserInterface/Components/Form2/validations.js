export function maxLength(count, value) {
  console.log("max Length", count, value);
  let error;
  error = `text should not exceed ${count}`;
  return error;
}

export function minLength(count, value) {
  console.log("min Length", count, value);
  let error;
  error = `text should be more that ${count}`;
  return error;
}
