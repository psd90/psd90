import React from 'react';
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/psd90" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/psd90" className="lkdin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
        </div>
    )
}

export default Footer;