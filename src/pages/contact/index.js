import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from './../../components/header';
import {  faPhoneVolume, faAt, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import './styles.scss';

const Contact = () => {
    return (<div>
            <Header />
        <div className="contact">
        <div id="contact-container">
        <div className="contact-info">
            <h4>
                Perminder Singh Dhillon
            </h4>
            <br/>
            <br/>
            <div className="icon-text">
                <FontAwesomeIcon className={`fa`} icon={faPhoneVolume} />
                <span>+44 7403315513</span>
            </div>
            <div className="icon-text">
            <FontAwesomeIcon className={`fa`} icon={faAt} />
                <span>pdhillon.dev@gmail.com</span>
            </div>
            <div className="icon-text">
            <FontAwesomeIcon  className={`fa`} icon={faLaptopHouse} />
                <span>Manchester, Liverpool, Remote</span>
            </div>
            <div className="social-media">
            <a href="https://github.com/psd90" className="github social">
                <FontAwesomeIcon icon={faGithub} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/psd90" className="lkdin social">
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </a>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contact;