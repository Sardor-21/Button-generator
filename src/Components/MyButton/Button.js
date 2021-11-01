import React from "react";
import { useSelector } from "react-redux";

const Button = () => {
  const paddingX = useSelector((state) => state.reducer.paddingX);
  const paddingY = useSelector((state) => state.reducer.paddingY);
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <p className="font-bold text-yellow-200">{`<button className="myButton">Button</button>`}</p>
        <p>.myButton {"{"}</p>
        <p>
          padding: {paddingY} {paddingX}
        </p>
      </div>
    </div>
  );
};

export default Button;
