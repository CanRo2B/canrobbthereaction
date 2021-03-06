import React from 'react';
// Import React Router Link component for internal hyperlinks
import Nav from './components/Nav'

const Header = () => {
  return (
    <header className="mb-4 py-3">
      <div className="">
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
