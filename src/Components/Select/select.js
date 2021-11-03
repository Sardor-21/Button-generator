import React from "react";

const Select = ({ func }) => {
  return (
    <select
      className="select-text outline-none border-2 rounded-md px-3"
      onChange={(e) => func(e)}
    >
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
  );
};

export default Select;
