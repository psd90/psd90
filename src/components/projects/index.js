import React from 'react';
import './styles.scss';
import contact from './../../images/contact.png';

const Projects = () => {
    return (
        <div>
            <div className="projects">
                <ul>
                    <li className="list"><a href="mrsdhillonscurries" >Mrs Dhillons Curries<h4>This is a project I completed after finishing the bootcamp</h4></a></li>
                    <li className="list"><a href="sklshr" >SklShr<h4>This was my team project at the end of the bootcamp course</h4></a></li>
                    <li className="list"><a href="ncnews" >NC News<h4>This was my first full stack application</h4></a></li>
                    <li className="list"><a href="meteorite" >Meteorite App<h4>This is an application that searches and displays results from the NASA Meteorite Landings API </h4></a></li>
                    <li className="list"><a href="website" >This Website<h4>A react portfolio that is designed to give the reader an insight into me and my work</h4></a></li>
                    
            <a href="contact" ><button type="button" className="button || list">
            <img src={contact} alt="Head" width="150"/>
            <div className="overlay overlay--blur">
            <div className="title">Contact</div>
            <p className="overlay_desc">
                Click to see my contact details
            </p>
            </div>
            </button></a>
                </ul>
            </div>
        </div>
    )
}

export default Projects