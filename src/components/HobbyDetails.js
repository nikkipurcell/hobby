import React from 'react';
import '../App.css';

export default ({ src, name, category, description }) => {
  const imgSrc = `/images/${src}.jpg`;

  return (
    <div className='hobby-detail'>
      <img src={imgSrc} alt={name} />
      <p className='category'>{category} hobby</p>
      <h1>{name}</h1>
      <p className='description'>{description}</p>
    </div>
  )
}
