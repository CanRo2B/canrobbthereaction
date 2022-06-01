import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <div className="App">
      <header>
        <h1>Candace Robbins</h1>
        <Nav />
      </header>
        </div>
      </div>
    </header>
  );
};

export default Header;
