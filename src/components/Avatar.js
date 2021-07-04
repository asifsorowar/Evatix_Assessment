import React from "react";
import profile from "../style/profile.png";
import "../style/avatar.css";

const Avatar = ({
  src = "",
  size = "",
  name = "",
  appearance = "",
  onClick = () => none,
}) => {
  return (
    <img
      alt={name}
      className={`avatar ${size} ${appearance}`}
      src={src || String(profile)}
      onClick={onClick}
    ></img>
  );
};

export default Avatar;
