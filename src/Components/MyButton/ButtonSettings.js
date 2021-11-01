import React, { useRef, useState } from "react";
import { dispatch } from "../../redux/store";
import { HEIGHT, WIDTH } from "../../redux/types";
import Slider from "@mui/material/Slider";

const ButtonSettings = () => {
  const widthRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const btnWidth = (e) => {
    setWidth(e.target.value);
    const action = { type: WIDTH, payload: width };
    dispatch(action);
  };
  const btnHeight = (e) => {
    setHeight(e.target.value);
    const action = { type: HEIGHT, payload: height };
    dispatch(action);
  };
  return (
    <div>
      <input type="text" ref={widthRef} onChange={btnWidth} />
      <div>
        <h2 className="block font-bold">Button Size</h2>
        <div className="grid grid-cols-2 gap-8 grid-flow-row">
          <div>
            <p>
              Vertical size:{" "}
              <span className="font-bold text-yellow-400">{height}px</span>
            </p>
            <Slider
              defaultValue={10}
              min={0}
              max={35}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={btnHeight}
            />
          </div>
          <div>
            <p>
              Horizontal size{" "}
              <span className="font-bold text-yellow-400">{width}px</span>
            </p>
            <Slider
              defaultValue={30}
              min={0}
              max={80}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={btnWidth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSettings;
