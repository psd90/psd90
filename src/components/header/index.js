import React from 'react';
import './styles.scss';
import Perminder from './../../images/perminder.png'


const Header = () => {
    
    
    function scroll() {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }
    return (
        <div className="header">
            <a href="./">
            <img className="logo" src={Perminder} alt="Head" height="150"/>
            </a>   
            <div className="menu">
            <ul className="menu-list">
                <li><a href="./">Home</a></li>
                <li><a href="./contact">Contact</a></li>
                <li><a href="./about">About Me</a></li>
            </ul>
            </div>
            </div>
       
    )
}

export default Header;