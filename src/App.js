import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Hobby from './pages/Hobby';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/hobby" element={<Home/>} />
        <Route path="/category/:category" element={<Category/>} />
        <Route path="/hobbies/:hobby" element={<Hobby/>} />
        <Route element={<NoMatch/>} />
      </Routes>
    </div>
  );
}

export default App;
