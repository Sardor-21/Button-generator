import React from "react";

const ColorInput = ({ fname, dfValue, func }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-black font-extrabold">{fname} </span>
      <input
        type="color"
        className="w-7 h-7 border-0  outline-none"
        defaultValue={dfValue}
        onChange={(e) => func(e)}
      />
    </div>
  );
};

export default ColorInput;
