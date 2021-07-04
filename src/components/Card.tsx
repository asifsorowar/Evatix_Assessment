import React from "react";
import "../style/card.css";
import ButtonGradient from "./ButtonGradient";

const Card = ({
  header = "",
  title = "",
  details = "",
  button = "see more",
}) => {
  return (
    <div className="card p-8 text-left rounded-md bg-white shadow-lg">
      <p className="card-header mb-2 uppercase text-xs">{header}</p>
      <p className="card-title mb-1 capitalize font-bold text-xl">{title}</p>
      <p className="card-details text-sm  leading-5">{details}</p>
      <ButtonGradient label={button} className="mt-5" />
    </div>
  );
};

export default Card;
