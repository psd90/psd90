import React from 'react';
import './styles.scss';
import Projects from './../../components/projects';
import Header from './../../components/header';
import Skills from './../../components/skills';



const Home = () => {
    


    return (
        <div class="main">
            <Header />
            <div className="slogan">
            <h2 className="landing">
                READ | LEARN | WRITE
            </h2>
            <h4>
            'From Post Office Clerk to Full Stack Developer, my time with Northcoders has given me the confidence to investigate technologies and build applications along side other developers in a productive manner. <br/>Below are some of the applications I have worked on, so please scroll through and take a look..'
            </h4>
            </div>
            <Projects />
            <div className="skills-container">
            <Skills/>
            </div>
        </div>
    )
}

export default Home;