import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import './styles/app.css';
import Assets from './assets/emma-harper-j3CjZYckM88-unsplash.jpg'
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
   <div>
    {/* Wrap page elements in Router component to keep track of location state */}
    <Router>
    <div className="App">
     
      <header>
        <h1>Candace Robbins</h1>
        <Nav />
      </header>
      <section>
            <div class="container"> 
                <img className="Container-background-image" src={Assets} title="Serenity on a lake" alt="Serenity on a lake" />
                <h2 class="in-picture">Be Strong; Be Courageous</h2>
            </div>
        </section>
        <Routes>
          <Route
            path="/canrobbthereaction" 
            element={<Main />} 
            />
          <Route 
                path="/projects" 
                element={<Projects />} 
              />
           <Route 
                path="/aboutme" 
                element={<Aboutme />} 
              />
              <Route 
                path="/resume" 
                element={<Resume />} 
              />
           <Route 
                path="/contact" 
                element={<Contact />} 
              />
        </Routes>
        {/* <div>
          <Aboutme />
        </div> */}
        <div>
          <Footer />
        </div>
    </div>
    </Router>
    </div>
  );
}

export default App;