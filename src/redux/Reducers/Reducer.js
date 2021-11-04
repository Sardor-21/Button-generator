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
  boxShadowColor: "#80e5ff",
  boxShadowY: 0,
  boxShadowX: 0,
  boxShadowBlur: 0,
  boxShadowSpread: 0,
  boxShadowInset: false,
  textShadowY: 0,
  textShadowX: 0,
  textShadowBlur: 0,
  textShadowColor: "#ffffff",
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
    case t.BOXSHADOWY:
      return { ...state, boxShadowY: action.payload };
    case t.BOXSHADOWX:
      return { ...state, boxShadowX: action.payload };
    case t.BOXSHADOWBLUR:
      return { ...state, boxShadowBlur: action.payload };
    case t.BOXSHADOWSPREAD:
      return { ...state, boxShadowSpread: action.payload };
    case t.BOXSHADOWCOLOR:
      return { ...state, boxShadowColor: action.payload };
    case t.BOXSHADOWINSET:
      return { ...state, boxShadowInset: action.payload };
    case t.TEXTSHADOWY:
      return { ...state, textShadowY: action.payload };
    case t.TEXTSHADOWX:
      return { ...state, textShadowX: action.payload };
    case t.TEXTSHADOWBLUR:
      return { ...state, textShadowBlur: action.payload };
    case t.TEXTSHADOWCOLOR:
      return { ...state, textShadowColor: action.payload };
    default:
      return state;
  }
};

export default reducer;
