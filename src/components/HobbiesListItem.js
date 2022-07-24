import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HobbiesListItem = ({ id, name, src }) => {
  const imgSrc = `/images/${src}.jpg`;
  const pageUrl = `/hobbies/${src}`;

  return (
    <li key={id}>
      <Link to={pageUrl}>
        <img src={imgSrc} alt={name} />
      </Link>
    </li>
  );
};

export default HobbiesListItem;
