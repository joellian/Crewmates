
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create a Player</Link></li>
          <li><Link to="/gallery">Crewmate Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

