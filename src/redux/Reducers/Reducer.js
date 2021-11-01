import * as t from "../types";

const initialState = {
  paddingX: "35px",
  paddingY: "10px",
  bgColor: "#00ccff",
  color: "#fff",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.WIDTH:
      return { ...state, paddingX: action.payload + "px" };
    case t.HEIGHT:
      return { ...state, paddingY: action.payload + "px" };
    case t.BGCOLOR:
      return { ...state, bgColor: action.payload };
    case t.COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default reducer;
