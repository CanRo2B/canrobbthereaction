import React from 'react';
import Assets1 from '../../assets/digital-marketing-meeting.jpg';
import Assets2 from '../../assets/screencapture-canro2b-github-io-gitGud-2022-04-15-09_42_02-edit.png';
import Assets3 from '../../assets/SNACK_Movers.png'

export default function Projects() {
    // const projectInfo = [
    //     {
    //         title:
    //         href:
    //         teamMembers: [ 
                
    //         ],
    //         teamMemberUrl: [
    
    //         ]

    //     }
    // ]

    return (
      <div className="container">
        <section>
            <h2 id="Work">Projects</h2>
                <figure className="Learn-box">
                    <a href="https://fast-tundra-37022.herokuapp.com/">
                    <img id="Learning" src={Assets3} title="SNACK_Movers Project 2" alt="snack mover project 2" />
                    </a>
                    <div className="All-Captions Proj-2" >Project 2: S.N.A.C.K. Movers <br /> Created by:<br />
                    <a href="https://github.com/SarahAmel">Sarah Attar,</a>
                    <a href="https://github.com/kaitdiaz01">Kaitlyn Diaz,</a>
                    <a href="https://github.com/Akuruu">Anjali Smith,</a>
                    <a href="https://github.com/nquinn95">Nick Quinn</a>
                    </div> 
                </figure>
        </section>
        {/* <!-- Flex boxes for projects to come, used background images to cover the flex box--> */}
        <section className="container-4">
            <article className="Box Coming-Soon" title="gitGud">
                <a href="https://canro2b.github.io/gitGud/">
                <img id="Coming-soon-pic" src={Assets2} title="Project 1 gitGud" alt= "git gud project"/>
                </a>
                <h4 class="All-Captions-Coming-soon">Created by Pet Beans, Inc; 
                    <br />
                    <a href="https://github.com/ArchRascal2988">Lex Matthews,</a> 
                    <a href="https://github.com/VBamalie">Molly Von Behren,</a> 
                    <a href="https://github.com/sgamit09">Scott Gamit</a>
                </h4>
            </article>
            <article className="Box Have-Not-Decided" title="Horiseon Collaborative Project Homework Project 01 Code_Refractor">
                <a href="https://canro2b.github.io/Code_Refractor/">
                    <img id="Coming-soon-pic" src={Assets1} title="Horiseon Collaborative Project Homework Project 01 Code_Refractor" alt="code refractor" />
                    </a>
                <h4 className="All-Captions">Learning, <br />1st Challenge Code_Refractor</h4>
            </article>
            <article className="Box Wait-for-it" title="Project not made yet, but please check back soon">
                <h4 className="All-Captions">Wait for it...</h4>
            </article>
            <article className="Box Bam" title="Project not made yet, but please check back soon">
                <h4 className="All-Captions" id="Bam-Caption">Have Not Decided</h4>
            </article>
            <article className="Box Bam" title="Project not made yet, but please check back soon">
                <h4 className="All-Captions" id="Bam-Caption">Have Not Decided</h4>
            </article>
            
        </section>
      </div>
    );
  }