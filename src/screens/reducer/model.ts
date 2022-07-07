import { checkboxActionType } from "./enum";

export interface CheckboxValue {
  privacy: boolean;
  terms: boolean;
}

export interface checkboxAction {
  type: checkboxActionType;
}

export const initCheckbox: CheckboxValue = {
  privacy: false,
  terms: false,
};
