import React from "react";
import "./button.scss";

const Button = ({ text, name, onClick, style, type = "button", dataTextV1, dataTextV2 }) => {
  return (
    <button
      data-text-v1={dataTextV1}
      data-text-v2={dataTextV2}
      type={type}
      onClick={onClick}
      className={name}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
