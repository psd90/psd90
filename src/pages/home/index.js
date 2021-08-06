import React from 'react';
import './styles.scss';
import Projects from './../../components/projects';
import Header from './../../components/header';
import Footer from './../../components/footer';
import Skills from './../../components/skills';



const Home = () => {
    


    return (
        <div class="main">
            <Header />
            <Projects />
            <h3 className="landing-text">
            'From Post Office Clerk to Full Stack Developer, 
            my time of study with Northcoders has given me the confidence 
            to investigate technologies and build applications along side other
             developers and alone in a productive manner. 
             <br/>Above are some of the applications I have contributed and written code for,
              so please scroll through and take a look.
              <br/>Below are my skills and attributes with a video showcasing a project I worked on.
    
            </h3>
            <Skills/>
            <h3 className="description">
                Watch my Northcoders group project presentation below.
            </h3>
            <iframe allow="fullscreen" title="Skll Shr" className="vid" 
                src="https://www.youtube.com/embed/KJQ4svIAVQY">
            </iframe>
            <Footer />
        </div>
    )
}

export default Home;