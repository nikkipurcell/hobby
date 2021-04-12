import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default () => {
  return (
    <React.Fragment>
      <a className='logo' href="/">hobby</a>

      <a href="#main-menu"
        id="main-menu-toggle"
        className="menu-toggle"
        aria-label="Open main menu"
      >
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars"></span>
      </a>

      <nav id="main-menu" className="main-menu" aria-label="Main menu">
        <a href="#main-menu-toggle"
          id="main-menu-close"
          className="menu-close"
          aria-label="Close main menu"
        >
          <span className="sr-only">Close main menu</span>
          <span className="fa fa-close" aria-hidden="true"></span>
        </a>
        <ul>
          <li><Link to="/category/past">Past</Link></li>
          <li><Link to="/category/present">Present</Link></li>
          <li><Link to="/category/future">Future</Link></li>
          <li><Link to="/category/ideas">More</Link></li>
        </ul>
      </nav>
      <a href="#main-menu-toggle"
        className="backdrop"
        tabIndex="-1"
        aria-hidden="true"
        hidden></a>
    </React.Fragment>
  );
}
