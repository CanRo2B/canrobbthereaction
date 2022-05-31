import React from 'react';
import '../styles/app.css';

export default function Contact() {
    return (
      <div className="container">
        <section>
        <h2 id="Contact-Me">Contact Me</h2>
        <nav>
            <ul>
                <li><a href="mailto:hofe36@hotmail.com">Email</a></li>
                <li><a href="https://github.com/CanRo2B">GitHub</a></li>
                <li><a id="Resume" href="https://docs.google.com/document/d/11xnTInxgp1RlQknzUAW5cJQgwXmuyQFAr6vwY79_HgI/export?format=pdf">Resume</a></li>
                <li><a href="www.linkedin.com/in/candace-robbins-364b95232">LinkedIn</a></li>
            </ul>
        </nav>
        </section>
      </div>
      );
      }