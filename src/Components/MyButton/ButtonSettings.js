import React, { useRef, useState } from "react";
import { dispatch } from "../../redux/store";
import * as t from "../../redux/types";
import Slider from "@mui/material/Slider";

const ButtonSettings = () => {
  const widthRef = useRef();
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(10);
  const [bgColor, setBgColor] = useState("");
  const [border, setBorder] = useState(10);
  const [borderRadius, setBorderRadius] = useState(10);
  const [btnColor, setBtncolor] = useState("");
  const btnWidth = (e) => {
    setWidth(e.target.value);
    const action = { type: t.WIDTH, payload: width };
    dispatch(action);
  };
  const btnHeight = (e) => {
    setHeight(e.target.value);
    const action = { type: t.HEIGHT, payload: height };
    dispatch(action);
  };
  const bgBtn = (e) => {
    setBgColor(e.target.value);
    const action = { type: t.BGCOLOR, payload: bgColor };
    dispatch(action);
  };
  const color = (e) => {
    setBtncolor(e.target.value);
    const action = { type: t.COLOR, payload: btnColor };
    dispatch(action);
  };
  const btnBorder = (e) => {
    setBorder(e.target.value);
    const action = { type: t.BORDER, payload: border };
    dispatch(action);
  };
  const btnBorderStyle = (e) => {
    const action = { type: t.BORDER_STYLE, payload: e.target.value };
    dispatch(action);
  };
  const btnBorderRadius = (e) => {
    setBorderRadius(e.target.value);
    const action = { type: t.BORDER_RADIUS, payload: e.target.value };
    dispatch(action);
  };
  const btnBorderColor = (e) => {
    const action = { type: t.BORDER_COLOR, payload: e.target.value };
    dispatch(action);
  };
  return (
    <div>
      <input type="text" ref={widthRef} onChange={btnWidth} />
      <div>
        <h2 className="block font-bold">Button Size</h2>
        <div className="grid grid-cols-2 gap-8">
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
              Horizontal size:{" "}
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
          <div>
            <p>
              Border:{" "}
              <span className="font-bold text-yellow-400">{border}px</span>
            </p>
            <Slider
              defaultValue={10}
              min={0}
              max={30}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(e) => btnBorder(e)}
            />
          </div>
          <div>
            <p>
              Border-radius:{" "}
              <span className="font-bold text-yellow-400">
                {borderRadius}px
              </span>
            </p>
            <Slider
              defaultValue={10}
              min={0}
              max={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(e) => btnBorderRadius(e)}
            />
          </div>
          <div>
            <span>Border-style: </span>
            <select className="select-text" onChange={(e) => btnBorderStyle(e)}>
              <option value="none">None</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              <option value="solid">Solid</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
              <option value="hidden">Hidden</option>
              <option value="dotted dashed solid double">Mix</option>
            </select>
          </div>
          <div>
            <span>Border-color: </span>
            <input
              type="color"
              className="w-7 h-7 border-0 outline-none"
              defaultValue={"#80E5ff"}
              onChange={(e) => btnBorderColor(e)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center">
            <span className="mr-2">Background-color: </span>
            <input
              className="w-7 h-7 border-0 outline-none"
              type="color"
              defaultValue={"#00ccff"}
              onChange={(e) => bgBtn(e)}
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Color: </span>
            <input
              className="w-7 h-7 border-0 outline-none"
              type="color"
              defaultValue={"#ffffff"}
              onChange={(e) => color(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSettings;
