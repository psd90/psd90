import React from 'react';
import './styles.scss';
import north from './../../images/north.gif'
import glasses from './../../images/glasses.png';

const Info = () => {
    return (
        <div className="nc">
        <div className=" info">
           
            <h2> 
            I'm P, a software developer from Manchester, with creation and accessibility at the forefront of my mind.<br />
            Whether it be fixing code or building decking, I love implementing a solution to solve a problem that lies ahead.<br /> 
            <br /> <br /> 
            Last summer I was put on furlough due to Covid-19 and I seized the opportunity to learn to code!<br /> 
            In August 2020 I left my job to embark on a new career, 
            a more fulfilling and challenging career in software development.<br />
            
            It was then I joined Northcoders who run a coding Bootcamp. <br /> 
           Having completed the very intense 14 week Bootcamp with the prestigious Northcoders, I am now ready to utilise my new skills and learn so much more.<br/>
            <br /> <br /> 
             I completed several projects with Northcoders, and since graduating I have developed a full stack application of my own whilst renovating my new home since the turn of the year.
             <br />See what I have been upto on my <a href="blog">blog</a>
             <br /> <br /> check out Northcoders&nbsp;
             <a href="https://northcoders.com/"><img src={north} alt="nc-gif" height="40"/></a> 
            
            </h2>
            </div>
        </div>
    )
} 

export default Info