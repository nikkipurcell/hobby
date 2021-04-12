import React from 'react';
import '../App.css';

export default ({ text, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {text}
    </button>
  );
}
