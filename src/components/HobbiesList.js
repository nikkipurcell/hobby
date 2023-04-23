import React from "react";
import HobbiesListItem from "./HobbiesListItem";
import "../App.css";

const HobbiesList = ({ categoryData }) => (
  <ul className="hobbies-list">
    {categoryData.map((hobby) => (
      <HobbiesListItem
        key={hobby.id}
        name={hobby.name}
        src={hobby.src}
      />
    ))}
  </ul>
);

export default HobbiesList;
