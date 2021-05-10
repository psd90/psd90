import React from 'react';
import './styles.scss';
import head from './../../images/head.png';
import down from './../../images/down.png'
import Projects from './../../components/projects';




const Home = () => {
    
    function scroll() {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }

    return (
        <div class="main">
        <div class="landing-text">
        <h2 >Perminder Singh Dhillon</h2>
        <h3 >web dev/<br />software engineer</h3>
        <h4 >
            Welcome to my portfolio where you can read about me and take a look at my projects.
        </h4>
        </div>
        <button className="down" type="button" onClick={scroll}><img src={down} alt="down" width="30"/></button>
        <h5 className="icons-h5">Hover over my head for more info.</h5>
        <div className="about">

                <a href="about" ><button type="button" className="button">
            <img src={head} alt="Head" width="150"/>
            <div className="overlay overlay--blur">
            <div className="title">About</div>
            <p className="overlay_desc">
                Click to read my story
            </p>
            </div>
            </button></a>
        
            
        </div>
        <Projects />
    </div>
    )
}

export default Home;