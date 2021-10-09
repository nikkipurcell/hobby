import React from 'react';
import Header from '../components/Header';
import HobbiesList from '../components/HobbiesList';
import data from "../data";
import '../App.css';

const getCategoryHobbies = (category) => data.filter(hobby => hobby.category === category);

// use react hook instead of calling function each time component renders

const Category = (props) => {
  const { category } = props.match.params;

  return (
    <div className="categories-page">
      <Header />
      <main>
        <h1 className='category-name'>{category} Hobbies</h1>
        <p>Click on a hobby to read more.</p>
        <HobbiesList categoryData={getCategoryHobbies(category)} />
      </main>
    </div>
  );
}

export default Category;
