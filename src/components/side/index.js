import React from 'react';
import './styles.scss';
import back from './../../images/back.svg'
import {useHistory} from 'react-router-dom';


const Side = () => {
    
    
    
    const history = useHistory();
    
    return (
        <div className="side">
            <button type="button" className="button1" onClick={()=>history.push('/portfolio')}>
            <img src={back} alt="back" height="30"/>
            <div className="overlay2 overlay2--blur">
            <div className="title">view other projects</div>
            <p className="overlay_desc">
               
            </p>
            </div>
            </button>
        </div>
    )
}

export default Side;