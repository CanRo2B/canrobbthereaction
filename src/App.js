import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './styles/app.css';
import Assets from './Assets/emma-harper-j3CjZYckM88-unsplash.jpg'

function App() {
  return (
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
        <div>
          <Footer />
        </div>
    </div>
  
  );
}

export default App;