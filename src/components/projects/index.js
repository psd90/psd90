import React from 'react';
import './styles.scss';






const Projects = () => {
    return (
            <div>
            <div id="projects">
                <ul id="prx">
                    <li className="list"><a href="mrsdhillonscurries" >Mrs Dhillons Curries<h4>This is a project I completed after <br/>finishing the bootcamp</h4></a></li>
                    <li className="list"><a href="sklshr" >SklShr<h4>This was my team project at the end of the<br/> bootcamp course</h4></a></li>
                    <li className="list"><a href="ncnews" >NC News<h4>This was my first<br/>full stack application</h4></a></li>
                    <li className="list"><a href="meteorite" >Meteorite App<h4>An application that searches and displays results <br/>from the NASA Meteorite Landings API </h4></a></li>
                    <li className="list"><a href="website" >This Website<h4>A react portfolio that is designed to give <br/>the reader an insight into me and my code</h4></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Projects