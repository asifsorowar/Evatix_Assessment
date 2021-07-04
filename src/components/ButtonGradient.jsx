import React from "react";

const ButtonGradient = ({ label, className = "", ...other }) => {
  return (
    <button
      className={`card-button cursor-pointer hover:bg-gray-100  py-3 px-10  uppercase text-white ${className}`}
      {...other}
    >
      {label}
    </button>
  );
};

export default ButtonGradient;
