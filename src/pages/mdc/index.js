import React from 'react';
import Side from './../../components/side';
import './styles.scss';
import Phone from './../../images/mdc.png';
import Logo from './../../images/Logo.png';

const Mdc = () => {
    return (
        <div>
        <Side />
        <div className="content">
        <h1>Mrs Dhillon's Curries</h1>
        <p> I'm building a food pre-order site (for my Mum, if you are wondering) that an Admin can create a cut-off date for customers
to create/delete orders. <br />Once the date has passed, no orders can be created/deleted and the Admin
can view all statistics such as; total amounts to prepare, to view and print order labels for each
customers order and also clear completed orders once orders have been collected.<br /><br />
This App allows the admin to delete and add items. The user 
        can sign up to create an order or just view the menu as a guest. If the user has made an account
        then they can create an order and submit it. If they are not happy with that order they can delete it or create a new order.
        <br /><br />As it is a pre-order service the App was designed to not take
        any payment so a situation didn't arise where someone makes a payment a month in advance only for 
        the batch size to not be sufficient to satisfy everyone who payed for one.<br /><br />
        The backend uses Firebase Authentication and utilises it's Realtime Database while the front end was built with React.</p>
        <p className="p2"> * This app is currently in production</p>
        <img className="phone" src={Phone} alt="Phone"/>
        <img className="logo" src={Logo} alt="Logo"/>
        </div>
        </div>
    )
}

export default Mdc


