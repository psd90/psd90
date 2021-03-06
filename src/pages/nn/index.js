import React from 'react';
import Side from './../../components/side';
import Header from './../../components/header';
import NN from './../../images/north.gif'
import './styles.scss';

const Nn = () => {
    return (
        <div>
        <Header />
        <Side />
        <div className="content">
        <h1>Northcoders-News</h1>
        <p className="p1"> This Application was my first full stack application ever!<br />
        <br />
        The App is a reddit clone that allows users to view and write articles whilst also being able to vote on articles and topics.
        It was built using React, PSQL and Express.<br /><br />
        You can view the backend repo and the front end repo below.
        </p>
        <p className="p2"> <a href="https://github.com/psd90/be-nc-news">View GitHub Backend</a><br/><a href="https://github.com/psd90/fe-nc-news">View GitHub Frontend</a></p>
        <img className="logo" src={NN} alt="Logo"/>
        </div>
        </div>
    )
}

export default Nn


