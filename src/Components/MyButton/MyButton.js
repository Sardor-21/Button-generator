import React from "react";
import { useSelector } from "react-redux";

const MyButton = () => {
  const paddingX = useSelector((state) => state.reducer.paddingX);
  const paddingY = useSelector((state) => state.reducer.paddingY);
  const bgColor = useSelector((state) => state.reducer.bgColor);
  const color = useSelector((state) => state.reducer.color);
  const border = useSelector((state) => state.reducer.border);
  const borderColor = useSelector((state) => state.reducer.borderColor);
  const borderStyle = useSelector((state) => state.reducer.borderStyle);
  const borderRadius = useSelector((state) => state.reducer.borderRadius);
  const boxShadowColor = useSelector((state) => state.reducer.boxShadowColor);
  const boxShadowY = useSelector((state) => state.reducer.boxShadowY);
  const boxShadowX = useSelector((state) => state.reducer.boxShadowX);
  const boxShadowBlur = useSelector((state) => state.reducer.boxShadowBlur);
  const boxShadowSpread = useSelector((state) => state.reducer.boxShadowSpread);
  const boxShadowInset = useSelector((state) => state.reducer.boxShadowInset);
  const textShadowY = useSelector((state) => state.reducer.textShadowY);
  const textShadowX = useSelector((state) => state.reducer.textShadowX);
  const textShadowBlur = useSelector((state) => state.reducer.textShadowBlur);
  const textShadowColor = useSelector((state) => state.reducer.textShadowColor);
  const text = useSelector((state) => state.reducer.text);
  console.log(borderStyle);
  return (
    <button
      className="bg-gray-600"
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        backgroundColor: bgColor,
        color: color,
        borderWidth: border,
        borderStyle: borderStyle,
        borderColor: borderColor,
        borderRadius: borderRadius,
        boxShadow: `${boxShadowY}px ${boxShadowX}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${
          boxShadowInset ? "inset" : ""
        }`,
        textShadow: `${textShadowX}px ${textShadowY}px ${textShadowBlur}px ${textShadowColor}`,
        fontSize: "20px",
        fontWeight: "bolder",
      }}
    >
      {text ? text : "My Button"}
    </button>
  );
};

export default MyButton;
