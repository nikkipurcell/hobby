import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HobbiesListItem = ({ name, src }) => (
  <li>
    <Link to={`/hobbies/${src}`}>
      <img src={`${window.location.origin}/hobby/images/${src}.jpg`} alt={name}></img>
    </Link>
  </li>
);

export default HobbiesListItem;
