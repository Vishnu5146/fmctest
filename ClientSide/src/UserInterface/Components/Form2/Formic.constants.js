import { maxLength, minLength } from "./validations";
import { maxValue } from "../../../Helpers/Validation";
export const VALUE = "value";
export const ERROR = "error";
export const REQUIRED_FIELD_ERROR = "This is required field";

export const stateSchema = {
  firstName: { value: "", error: "" },
  lastName: { value: "", error: "" },
  tags: { value: "", error: "" }
};

export const stateValidatorSchema = {
  firstName: {
    required: true,
    validator: [maxLength, minLength]
  },
  lastName: {
    required: true,
    validator: [maxLength, minLength]
  },
  tags: {
    required: true,
    validator: [maxLength, minLength]
  }
};
