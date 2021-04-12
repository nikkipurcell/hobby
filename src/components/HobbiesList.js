import React from 'react';
import HobbiesListItem from './HobbiesListItem';
import '../App.css';

export default ({ categoryData }) => {
  return (
    <ul className='hobbies-list'>
      {categoryData.map(hobby => (
        <HobbiesListItem
          key={hobby.id}
          id={hobby.id}
          name={hobby.name}
          src={hobby.src}
        />
      ))}
    </ul>
  )
}
