import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import HobbyDetails from '../components/HobbyDetails';
import data from "../data";
import '../App.css';

const Hobby = (props) => {
  const { hobby } = props.match.params;
  const handleOnClick = () => props.history.goBack();

  return (
    <div className="hobby-page">
      <Header />
      {data
        .filter(item => item.src === hobby)
        .map(hobby => (
          <HobbyDetails
            key={hobby.id}
            src={hobby.src}
            name={hobby.name}
            category={hobby.category}
            description={hobby.description}
          />
        ))}
      <Button text='Back' onClick={handleOnClick} />
      <Button text='Next Hobby' />
    </div>
  );
}

export default Hobby;
