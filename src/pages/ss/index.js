import React from 'react';
import Side from './../../components/side';
import './styles.scss';
import SS from './../../images/loading.gif';
import Header from '../../components/header';

const Ss = () => {
    return (
        <div>
        <Header />
        <Side />
        <div className="content">
        <h1>SkllShr</h1>
        <p className="p1">SkllShr (skill share) is an application that me and a team of 3 others planned, designed and implemented in the last 3 week phase of the Bootcamp.<br /><br />
            The App allows users to sign up and create a profile which, depending on their own interests and skills, will be matched with other users in order of distance. <br /><br />
            There is instant messaging functionality too which is made possible by TalkJS. We made use of a Postcode API to sort the results by distance. 
            The backend uses Firebase Authentication and utilises it's Realtime Database while the front end was built with React.
        </p>
        <p className="p2"> <a href="https://skllshr.netlify.app/">View Live App</a><br/><a href="https://github.com/psd90/skillshare-frontend">View GitHub repo</a></p>
        <img className="logo" src={SS} alt="Logo"/>
        </div>
        </div>
    )
}

export default Ss


