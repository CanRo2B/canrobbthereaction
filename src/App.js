import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import './styles/app.css';
import Assets from './Assets/emma-harper-j3CjZYckM88-unsplash.jpg'
import Aboutme from './Components/Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Components/Footer';


function App() {
  return (
    <ApolloProvider client={client}>
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
            path="/" 
            element={<App />} 
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
                path="/contact" 
                element={<Contact />} 
              />
        </Routes>
        <div>
          <Footer />
        </div>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;