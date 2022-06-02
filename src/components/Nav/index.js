import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="bg-primary">
      <div className="">
      <Link className="" to="/Aboutme">
            <h3>About Me</h3>
        </Link>
        <Link to="/Projects">
            <h3>Portfolio</h3>
        </Link>
        <Link to="/Resume">
            <h3>Resume</h3>
        </Link>
        <Link to="/Contact">
            <h3>Contact</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;