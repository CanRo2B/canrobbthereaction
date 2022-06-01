import React from 'react';
import Assets from '../../assets/couplepicture.jpeg'

export default function Aboutme() {
    return (
      <div className="container">
           <section>
            <h2 id="About-Me">About Me</h2>
                <div className="About-Me-Row">
                    <p id="About-Me-text">First of all, I don't like talking/writing about myself.  I enjoy meeting new people and having new experiences.  I am a military spouse and have two children, that take up a lot of my time.  Now it is time for me to explore new adventures!  Although I do not have very much computer experience.  I do have a customer service background.  I enjoy solving problems and making everyone's experience more enjoyable.  Joining the UCF Bootcamp, I hope to utilize another avenue to customer service.  An avenue that can reach a broader spectrum of people.
                    </p>
                    <img id="Personal-picture" src= { Assets } alt="My husband and I enjoying a beautiful day."/>
                    <p id="About-Me-text-cont"> Please enjoy the homework, but most importantly the project, "gitGud" made by Lex Matthews, Molly Von Behren and Scott Gamitt.  They were amazing teammates that made this whole project.  I wish I could say that I helped them but they were the brains and know how behind it.  I highly recommend you checking out their gitHub pages to see all their bodies of work.  
                    </p>
                </div>
        </section>
      </div>
      );
      }