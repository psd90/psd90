import React from 'react';
import Side from './../../components/side';
import './styles.scss';
import contact from './../../images/contact.png';

const Web = () => {
    return (
        <div>
        <Side />
        <div className="content">
        <h1>psd90</h1>
        <p> This website has gone through quite a few iterations in which I have finally settled on this style, for now...<br /><br />
        I feel that in itself shows a lot about who I am as a person; a perfectionist who strives for but never reaches perfection..<br /><br /><br />
        It is a React app that is styled with SCSS.<br /><br />
        I would love to spend more time on it, but I have decided that a finished portfolio is better than a perfect one, especially with all the house renovations on-going!<br /><br />
        I hope you have enjoyed visiting and I look forward to hearing from you.... </p>
        
        <p className="p2"> <a href="contact" ><button type="button" className="button || list">
            <img src={contact} alt="Head" width="150"/>
            <div className="overlay overlay--blur">
            <div className="title">Contact</div>
            <p className="overlay_desc">
                Click to see my contact details
            </p>
            </div>
            </button></a></p>
        </div>
        </div>
    )
}

export default Web

