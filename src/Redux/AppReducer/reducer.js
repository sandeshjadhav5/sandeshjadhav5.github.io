import * as types from "./actionTypes";

const initialState = {
  isDark: true,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.COLOR_MODE:
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};
export { reducer };
