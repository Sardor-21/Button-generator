import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="block font-extrabold bg-gray-400 p-1 text-white rounded-md">
      {children}
    </h2>
  );
};

export default Title;
