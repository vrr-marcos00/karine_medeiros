/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './styles.css';

/**
 * Images
 */
import toggleImage from "./images/toggle-column.png";
import logo from "./images/logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#sobre">SOBRE</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
      </div>
      <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
        <img src={toggleImage} alt="toggle" />
      </button>
    </nav>
  );
}

export default Navbar;
