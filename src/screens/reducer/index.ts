import { checkboxActionType } from "./enum";
import { CheckboxValue, checkboxAction } from "./model";

export const checkboxReducer = (
  state: CheckboxValue,
  action: checkboxAction
) => {
  const { type } = action;

  switch (type) {
    case checkboxActionType.PRIVACY:
      return { ...state, privacy: !state.privacy };

    case checkboxActionType.TERMS:
      return { ...state, terms: !state.terms };
  }
};
