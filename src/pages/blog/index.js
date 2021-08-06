import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import coco from './../../images/work/coco.JPEG';
import doggy2 from './../../images/2.jpg';
import doggy4 from './../../images/4.jpg';
import doggy from './../../images/5.jpg';
import menu from './../../images/menu.png';
import './styles.scss';
import Renovations from '../../components/renovations';

const Blog = () => {
    return (
    <div className="main">
    <div className="heading"><h3>Busy with what exactly?</h3></div>
      <div className="post">
    <div className="part1">
    <p>
        I have gone from being as still as a statue during lockdown to hiking many miles a week to exercise 
        this crazy pooch rather than myself who is the real fool for not wanting to exercise. 
        <br/>
        </p>
        <p>
        It's been exhausting renovating but the pain has been worth it. However, in that time being away from the daily interaction with the Northcoders cohort and tutors, I was wondering how to ensure the foundations of what I learned stayed strong. I missed the collabarative aspect of coding when I created a solo full stack application.
        <br/>
        </p>
        <p>
        The prospect of releasing an app for the public to use is very daunting although it seems to be working for now..<br/><a href="https://order-664f0.web.app/registration"> So no pressure!
    </a>
    <br/>
        <a href="contact">Contact me to find out more.</a>
    </p>
        </div>

    <div className="part2">
        <img className="dog2" src={doggy2} alt="d2" />
        <img className="dog4" src={doggy4} alt="d4" />
        <img className="dog" src={doggy} alt="d" />
        <img className="menu1" src={menu} alt="menu" />
    </div>
   <Renovations />

   </div>
    <Footer />
    </div>
    )
}

export default Blog;