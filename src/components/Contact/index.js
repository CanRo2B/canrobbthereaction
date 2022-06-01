import React from 'react';


export default function Contact() {
    return (
      <div className="container">
        <section>
        <h2 id="Contact-Me">Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input 
              name="name" type="text" className="contactForm" placeholder="Please insert your name" id="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input 
             name="email" type="text" className="contactForm" placeholder="Please insert your email address" id="email" />
          <br />
          <label htmlFor="message">Message:</label>
          <input 
             name="message" type="text" className="contactForm" placeholder="Optional Message" id="message" />
          <br />
          <button onClick="" className="btn btn-primary" type="submit">Submit</button>
        </form>
        </section>
      </div>
      );
      }