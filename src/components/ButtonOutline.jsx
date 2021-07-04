import React from "react";

const ButtonOutline = ({ label, className = "", ...other }) => {
  return (
    <a
      className={`bg-transparent cursor-pointer hover:bg-white hover:text-black text-white font-bold  py-3 px-10  uppercase border border-white ${className}`}
      {...other}
    >
      {label}
    </a>
  );
};

export default ButtonOutline;
