import React from 'react';
import Header from '../../components/header';
import Side from './../../components/side';
import './styles.scss';

const Ma = () => {
    return (
        <div>
        <Header />
        <Side />
        <div className="content">
        <h1>Meteorite Landings</h1>
        <p className="p1">This was a pair programming project in which we created a single page application makes use of a NASA API that stores information of meteorite landings.<br /><br />
        The application takes the users desired search condition and then plots out the results on a map. 
        <br /><br />This app uses React for the frontend and the NASA API for the data.</p>
        <p className="p2"> <a href="https://github.com/lancaster-coder1991/Meteorite_React_SPA/">View GitHub Repo</a></p>
        </div>
        </div>
    )
}

export default Ma


