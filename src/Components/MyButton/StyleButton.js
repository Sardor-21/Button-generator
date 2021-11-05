import React from "react";
import { useSelector } from "react-redux";

const StyleButton = () => {
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
  const className = useSelector((state) => state.reducer.className);
  const text = useSelector((state) => state.reducer.text);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="styleButton">
        <div className="font-bold text-base mb-6">
          <span className="text-blue-400">{`<`}</span>
          <span className="text-green-800 mr-2">button</span>
          <span className="text-blue-400">className</span>
          <span className="text-green-800">
            ="{className ? className : "myButton"}"
          </span>
          <span className="text-blue-400">{`>`}</span>
          <span className="text-white">{text ? text : "My Button"}</span>
          <span className="text-blue-400">{`</`}</span>
          <span className="text-green-800">button</span>
          <span className="text-blue-400">{`>`}</span>
        </div>
        <p className="top text-green-800 font-extrabold">
          .{className ? className : "myButton"} <span>{"{"}</span>
        </p>
        <div className="pl-5">
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">padding</span>: {paddingY}{" "}
            {paddingX};
          </p>
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">border</span>: {border}{" "}
            {borderStyle} {borderColor};
          </p>
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">border-radius</span>:{" "}
            {borderRadius}px;
          </p>
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">background-color</span>:{" "}
            {bgColor};
          </p>
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">color</span>: {color};
          </p>
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">box-shadow</span>:{" "}
            {boxShadowY}px {boxShadowX}px {boxShadowBlur}px
            {boxShadowSpread}px {boxShadowColor} {boxShadowInset ? "inset" : ""}
            ;
          </p>
          <p className="text-black-700 font-semibold">
            <span className="text-red-200 font-bold">text-shadow</span>:{" "}
            {textShadowX}px {textShadowY}px {textShadowBlur}px {textShadowColor}
            ;
          </p>
        </div>
        <p className="bottom text-green-800 font-extrabold"> {"}"}</p>
      </div>
    </div>
  );
};

export default StyleButton;
