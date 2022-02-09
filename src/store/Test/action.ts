import { TEST_ACTION_TYPE } from "./modules/actionTypes";

export const testAction = () => ({
  type: TEST_ACTION_TYPE,
  payload: {},
});

export type TestActionTypes = ReturnType<typeof testAction>;
