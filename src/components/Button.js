import React from "react";
import "../style/button.css";

const Button = ({
  appearance = "",
  isDisabled = false,
  isSelected = false,
  shouldFitContainer = false,
  spacing = "",
  iconAfter = "",
  iconBefore = "",
  onClick = () => none,
  children,
  ...other
}) => {
  return (
    <>
      <button
        className={`btn ${appearance} ${isDisabled ? "disable" : ""} ${
          isSelected ? "selected" : ""
        } ${spacing}`}
        style={shouldFitContainer ? { width: "100%" } : {}}
        disabled={isDisabled}
        onClick={onClick}
        {...other}
      >
        {iconAfter}
        {children}
        {iconBefore}
      </button>
    </>
  );
};

export default Button;
