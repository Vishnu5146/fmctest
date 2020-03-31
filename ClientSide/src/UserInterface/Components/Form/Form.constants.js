export const VALUE = "value";
export const ERROR = "error";
export const REQUIRED_FIELD_ERROR = "This is required field";

export const stateSchema = {
  first_name: { value: "", error: "" },
  last_name: { value: "", error: "" },
  tags: { value: "", error: "" }
};

export const stateValidatorSchema = {
  first_name: {
    required: true,
    validator: {
      func: value => /^[a-zA-Z]+$/.test(value),
      error: "Invalid first name format."
    }
  },
  last_name: {
    required: true,
    validator: {
      func: value => /^[a-zA-Z]+$/.test(value),
      error: "Invalid last name format."
    }
  },
  tags: {
    required: true,
    validator: {
      func: value => /^(,?\w{3,})+$/.test(value),
      error: "Invalid tag format."
    }
  }
};
