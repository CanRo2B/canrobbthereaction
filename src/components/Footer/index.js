import React from 'react';


const Footer = () => {
  
  return (
    <footer className="w-100 mt-5 p-5">
      <div className="container text-center mb-3">
      <div className="container">
        <section>
        <h2 id="Contact-Me">Contact Me</h2>
        <nav>
            <ul>
                <li><a href="mailto:canrob0522@gmail.com">Email</a></li>
                <li><a href="https://github.com/CanRo2B">GitHub</a></li>
                <li><a id="Resume" href="https://docs.google.com/document/d/11xnTInxgp1RlQknzUAW5cJQgwXmuyQFAr6vwY79_HgI/export?format=pdf">Resume</a></li>
                <li><a href="https://www.linkedin.com/in/candace-robbins-364b95232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQLmHDRHTTyCvrefhJbYFkw%3D%3D">LinkedIn</a></li>
            </ul>
        </nav>
        </section>
      </div>
        <h4 className="mt-5">
          Made By Candace Robbins 2022
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
