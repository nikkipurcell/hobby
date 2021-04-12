import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Hobby from './pages/Hobby';
import NoMatch from './pages/NoMatch';
import './App.css';

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:category" component={Category} />
        <Route path="/hobbies/:hobby" component={Hobby} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}
