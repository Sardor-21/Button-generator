import * as t from "../types";

const initialState = {
  paddingX: "35px",
  paddingY: "10px",
  bgColor: "#00ccff",
  color: "#fff",
  border: "10px",
  borderStyle: "none",
  borderColor: "#80E5ff",
  borderRadius: "10px",
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
    case t.BORDER:
      return { ...state, border: action.payload + "px" };
    case t.BORDER_STYLE:
      return { ...state, borderStyle: action.payload };
    case t.BORDER_COLOR:
      return { ...state, borderColor: action.payload };
    case t.BORDER_RADIUS:
      return { ...state, borderRadius: action.payload };
    default:
      return state;
  }
};

export default reducer;
