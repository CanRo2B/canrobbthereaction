import React from 'react';
import App from '../App';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/app.css';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
        <section
            style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            }}
        >
        <div style={linkStyle}>
          <a href={App}>Home</a>
        </div>
        <div style={linkStyle}>
          <a href={Aboutme}>About Me</a>
        </div>
        <div style={linkStyle}>
          <a href={Projects}>Projects</a>
        </div>
        <div style={linkStyle}>
          <a href={Contact}>Contact</a>
        </div>
      </section>
    </nav>
  );
 }