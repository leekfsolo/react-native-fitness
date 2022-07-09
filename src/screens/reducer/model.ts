import { ACCOUNT, checkboxActionType } from "./enum";

export interface CheckboxValue {
  privacy: boolean;
  terms: boolean;
}

export interface checkboxAction {
  type: checkboxActionType;
}

export interface SignupFormControl {
  email: string;
  password: string;
}

export interface SignupValue {
  label: ACCOUNT;
  placeholder: string;
}

export const initCheckbox: CheckboxValue = {
  privacy: false,
  terms: false,
};
