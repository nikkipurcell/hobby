import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Hobby from "./pages/Hobby";
import NoMatch from "./pages/NoMatch";
import allHobbies from "./data";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/hobby" element={<Home />} />
        <Route path="/" element={ <Navigate to="/hobby" /> } />
        <Route path="/category/:category" element={<Category allHobbies={allHobbies} />} />
        <Route path="/hobbies/:hobby" element={<Hobby />} />
        <Route element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
