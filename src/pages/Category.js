import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Header from "../components/Header";
import HobbiesList from "../components/HobbiesList";
import "../App.css";

const Category = ({ allHobbies }) => {
  const [hobbies, setHobbies] = useState([]);
  const [category, setCategory] = useState('');
  const location = useLocation();

  useEffect(() => {
    setHobbies(allHobbies);
  }, []);

  useEffect(() => {
    const page = location.pathname.split("/").pop();

    setCategory(page);
  }, [location]);

  useEffect(() => {
    const filteredHobbies = allHobbies.filter((hobby) => {
      return hobby.category === category
    });

    setHobbies(filteredHobbies)
  }, [category]);

  return (
    <div className="categories-page">
      <Header />
      <main>
        <h1 className="category-name">{category} Hobbies</h1>
        <p>Click on a hobby to read more.</p>
        <HobbiesList categoryData={hobbies} />
      </main>
    </div>
  );
};

export default Category;
