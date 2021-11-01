import React from "react";
import { useSelector } from "react-redux";

const MyButton = () => {
  const paddingX = useSelector((state) => state.reducer.paddingX);
  const paddingY = useSelector((state) => state.reducer.paddingY);
  console.log(paddingX);
  return (
    <button
      className="bg-gray-600"
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
    >
      Button
    </button>
  );
};

export default MyButton;
