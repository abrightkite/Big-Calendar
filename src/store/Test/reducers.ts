import { TestActionTypes } from "./action";
import { TEST_ACTION_TYPE } from "./modules/actionTypes";

type TestStateTypes = {
  test: "hello world!";
};

const initialState: TestStateTypes = {
  test: "hello world!",
};

const testReducers = (
  state: TestStateTypes = initialState,
  { type, payload }: TestActionTypes
) => {
  switch (type) {
    case TEST_ACTION_TYPE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default testReducers;
