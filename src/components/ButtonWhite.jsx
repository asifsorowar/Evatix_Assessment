import React from "react";

const ButtonWhite = ({ label, className = "", ...other }) => {
  return (
    <a
      className={`bg-white cursor-pointer hover:bg-gray-100 text-black font-bold py-3 px-10 uppercase ${className}`}
      {...other}
    >
      {label}
    </a>
  );
};

export default ButtonWhite;
