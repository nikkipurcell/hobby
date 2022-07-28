import React from "react";
import Header from "../components/Header";
import HobbiesList from "../components/HobbiesList";
import data from "../data";
import "../App.css";

const getCategoryHobbies = (category) =>
  data.filter((hobby) => hobby.category === category);

const Category = () => {
  const page = window.location.pathname.split("/").pop();

  return (
    <div className="categories-page">
      <Header />
      <main>
        <h1 className="category-name">{page} Hobbies</h1>
        <p>Click on a hobby to read more.</p>
        <HobbiesList categoryData={getCategoryHobbies(page)} />
      </main>
    </div>
  );
};

export default Category;
