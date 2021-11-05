import { Slider } from "@mui/material";
import React from "react";

const ButtonSlide = ({ fname, item, dfValue, min, max, func }) => {
  return (
    <div>
      <p className="text-black font-extrabold">
        {fname} <span className="font-bold text-blue-400">{item}px</span>
      </p>
      <Slider
        defaultValue={dfValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={func}
      />
    </div>
  );
};

export default ButtonSlide;
