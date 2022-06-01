import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="bg-primary text-light mb-2 p-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg">
      <Link className="" to="/Aboutme">
            <h3>About Me</h3>
        </Link>
        <Link to="/Contact">
            <h3>Contact</h3>
        </Link>
        <Link to="/Projects">
            <h3>Portfolio</h3>
        </Link>
      </div>
    </header>
  );
};

export default Nav;