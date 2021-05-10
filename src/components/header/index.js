import React from 'react';
import './styles.scss';
import face from './../../images/face.png'
import {useHistory} from 'react-router-dom';


const Header = () => {
    
    
    
    const history = useHistory();
    
    return (
        <div className="header">
            psd-
            <button type="button" className="button1" onClick={()=>history.push('/')}>
            <img src={face} alt="Head" height="150"/>
            <div className="overlay1 overlay1--blur">
            <div className="title">Go Home </div>
            <p className="overlay_desc">
               
            </p>
            </div>
            </button>
        </div>
    )
}

export default Header;