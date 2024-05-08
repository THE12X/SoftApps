import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../Font awsome MRX/css/font-awesome.min.css';
import '../Font awsome MRX/css/font-awesome.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className='logo'><span className='span'>Soft</span>App</h1>
        <input type="checkbox" id="toggler" />
        <label for="toggler"><i class="fa fa-list"></i></label>
        <div className="menu">
          <ul className='list'>
            <li>
              <Link className='a' to="/">HOME.</Link>
            </li>
            <li>
              <Link className='a' to="/android">APPS.</Link>
            </li>
            <li>
              <Link className='a' to="/programs">PROGRAMS.</Link>
            </li>
            <li>
              <Link className='a' to="/about">ABOUT.</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;