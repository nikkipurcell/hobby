import React from 'react';
import '../App.css';

const HobbyDetails = ({ src, name, category, description }) => {
  const imgSrc = `/images/${src}.jpg`;

  return (
    <div className='hobby-detail'>
      <figure>
        <img src={imgSrc} alt={name} />
      </figure>
      <p className='category'>{category} hobby</p>
      <h1>{name}</h1>
      <p className='description'>{description}</p>
    </div>
  )
}

export default HobbyDetails;
