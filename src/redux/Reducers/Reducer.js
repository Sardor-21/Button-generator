import * as t from "../types";

const initialState = {
  paddingX: "auto",
  paddingY: "auto",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.WIDTH:
      return { ...state, paddingX: action.payload + "px" };
    case t.HEIGHT:
      return { ...state, paddingY: action.payload + "px" };
    default:
      return state;
  }
};

export default reducer;
