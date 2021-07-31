import React from 'react';
import './styles.scss';
import head from './../../images/head.png';
import down from './../../images/down.png'
import Projects from './../../components/projects';
import Header from './../../components/header';




const Home = () => {
    


    return (
        <div class="main">
            <Header />
            <div className="slogan">
            <h2 className="landing">
                READ|LEARN|WRITE
            </h2>
            <h4 className="landing-text">Ready to Code</h4>
            </div>
            <Projects />
        </div>
    )
}

export default Home;