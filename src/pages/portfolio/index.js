import React from 'react';
import Projects from './../../components/projects';
import Footer from './../../components/footer';
import Header from './../../components/header';

const Portfolio = () => {
    return (
        <div className="portfolio">  
            <Header />
            <Projects />
            <h3 className="scroll"> Scroll through ---> </h3>
            <Footer />
        </div>
    )
}

export default Portfolio