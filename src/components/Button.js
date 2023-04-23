import React from "react";
import "../App.css";

const Button = ({ text, onClick }) => (
  <button className="btn-primary" onClick={onClick}>
    {text}
  </button>
);

export default Button;
