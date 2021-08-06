import React from 'react';
import Side from './../../components/side';
import './styles.scss';
import Header from '../../components/header';
import Face from './../../images/face.gif';

const Web = () => {
    return (
        <div>
        <Header />
        <Side />
        <div className="content">
        <h1>psd90</h1>
        <p className="p1"> This website has gone through quite a few iterations in which I have finally settled on this style, for now...<br /><br />
        I feel that in itself shows a lot about who I am as a person; a perfectionist who strives for but never reaches perfection..<br /><br /><br />
        It is a React app that is styled with SCSS.<br /><br />
        I would love to spend more time on it, but I have decided that a finished portfolio is better than a perfect one, especially with all the house renovations on-going!<br /><br />
        I hope you have enjoyed visiting and I look forward to hearing from you... </p>
        
        <p className="p2"> <a href="contact" >Contact</a></p>
        <p className="p3"> <a href="about" >About </a></p>
        <img className="logo" src={Face} alt="Logo"/>
        </div>
        </div>
    )
}

export default Web

