import React from 'react';
import './styles.scss';
import Perminder from './../../images/perminder.png'


const Header = () => {
    

    return (
        <div className="header">
            <a className="logo-tag" href="./">
            <img className="logo" src={Perminder} alt="Head" height="150"/>
            </a>   
            <div className="menu">
            <ul className="menu-list">
                <li><a href="./">Home</a></li>
                <li><a href="./contact">Contact</a></li>
                <li><a href="./about">About Me</a></li>
            </ul>
            </div>
            <div class="line"></div>
            </div>
       
    )
}

export default Header;