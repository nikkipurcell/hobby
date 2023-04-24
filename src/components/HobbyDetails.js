import React, { useEffect } from "react";
import "../App.css";

const HobbyDetails = ({ src, name, category, description }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0));
  }, []);

  const imgSrc = `${window.location.origin}/hobby/images/${src}.jpg`;

  return (
    <div className="hobby-detail">
      <figure>
        <img src={imgSrc} alt={name} />
      </figure>
      <p className="category">{category} hobby</p>
      <h1>{name}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default HobbyDetails;
