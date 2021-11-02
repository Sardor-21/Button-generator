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
      }}
    >
      Button
    </button>
  );
};

export default MyButton;
