import React from "react";
import { useSelector } from "react-redux";

const MyButton = () => {
  const paddingX = useSelector((state) => state.reducer.paddingX);
  const paddingY = useSelector((state) => state.reducer.paddingY);
  const bgColor = useSelector((state) => state.reducer.bgColor);
  const color = useSelector((state) => state.reducer.color);
  console.log(paddingX);
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
      }}
    >
      Button
    </button>
  );
};

export default MyButton;
