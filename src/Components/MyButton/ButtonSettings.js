import React, { useRef, useState } from "react";
import { dispatch } from "../../redux/store";
import * as t from "../../redux/types";
import ButtonSlide from "../ButtonSlide/ButtonSlide";
import Title from "../Title/title";
import Select from "../Select/select";
import ColorInput from "../Color/colorinput";
const ButtonSettings = () => {
  const widthRef = useRef();
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(10);
  const [bgColor, setBgColor] = useState("");
  const [border, setBorder] = useState(10);
  const [borderRadius, setBorderRadius] = useState(10);
  const [btnColor, setBtncolor] = useState("");
  const [boxShadowY, setBoxShadowY] = useState(0);
  const [boxShadowX, setBoxShadowX] = useState(0);
  const [boxShadowBlur, setBoxShadowBlur] = useState(0);
  const [boxShadowSpread, setBoxShadowSpread] = useState(0);
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
  const btnBoxShadowY = (e) => {
    setBoxShadowY(e.target.value);
    const action = { type: t.BOXSHADOWY, payload: e.target.value };
    dispatch(action);
  };
  const btnBoxShadowColor = (e) => {
    const action = { type: t.BOXSHADOWCOLOR, payload: e.target.value };
    dispatch(action);
  };
  const btnBoxShadowX = (e) => {
    setBoxShadowX(e.target.value);
    const action = { type: t.BOXSHADOWX, payload: e.target.value };
    dispatch(action);
  };
  const btnBoxShadowBlur = (e) => {
    setBoxShadowBlur(e.target.value);
    const action = { type: t.BOXSHADOWBLUR, payload: e.target.value };
    dispatch(action);
  };
  const btnBoxShadowSpread = (e) => {
    setBoxShadowSpread(e.target.value);
    const action = { type: t.BOXSHADOWSPREAD, payload: e.target.value };
    dispatch(action);
  };

  return (
    <div>
      <input type="text" ref={widthRef} onChange={btnWidth} />
      <div>
        {/* =============Button Size============== */}
        <Title>Button Size</Title>
        <div className="grid grid-cols-2 gap-8">
          <ButtonSlide
            fname={"Vertical size: "}
            item={height}
            dfValue={10}
            min={0}
            max={35}
            func={btnHeight}
          />
          <ButtonSlide
            fname={"Horizontal size: "}
            item={width}
            dfValue={30}
            min={0}
            max={80}
            func={btnWidth}
          />
        </div>
        <Title>Border</Title>
        <div className="grid grid-cols-2 gap-8">
          <ButtonSlide
            fname={"Border-size: "}
            item={border}
            dfValue={10}
            min={0}
            max={30}
            func={btnBorder}
          />
          <ButtonSlide
            fname={"Border-radius: "}
            item={borderRadius}
            dfValue={10}
            min={0}
            max={50}
            func={btnBorderRadius}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 mb-3">
          <div>
            <span>Border-style: </span>
            <Select func={btnBorderStyle} />
          </div>
          <div>
            <ColorInput
              fname={"Border-color: "}
              dfValue={"#80E5ff"}
              func={btnBorderColor}
            />
          </div>
        </div>
        <Title>Box-shadow</Title>
        <div className="grid grid-cols-2 gap-8 mb-3">
          <ButtonSlide
            fname={"Vertical-position: "}
            item={boxShadowY}
            dfValue={0}
            min={-100}
            max={100}
            func={btnBoxShadowY}
          />
          <ButtonSlide
            fname={"Horizontal-position: "}
            item={boxShadowX}
            dfValue={0}
            min={-100}
            max={100}
            func={btnBoxShadowX}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 mb-3">
          <ButtonSlide
            fname={"Blur-radius: "}
            item={boxShadowBlur}
            dfValue={0}
            min={0}
            max={50}
            func={btnBoxShadowBlur}
          />
          <ButtonSlide
            fname={"Spread-radius: "}
            item={boxShadowSpread}
            dfValue={0}
            min={-50}
            max={50}
            func={btnBoxShadowSpread}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 mb-3">
          <ColorInput
            dfValue="#80e5ff"
            fname={"Box-shadow-color:"}
            func={btnBoxShadowColor}
          />
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
