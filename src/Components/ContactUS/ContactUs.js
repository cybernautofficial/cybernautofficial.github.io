import React from 'react';
import './ContactUs.css';
import Footer from "./Footer"

function ContactUs(){
    return(
        <>
        <div className="contact-us mx-5 mt-2">CONTACT US</div><span className="horiLine"></span>
        <div className="row main mx-5 py-lg-4 py-0">
            <div className="col-lg-2 contact-button mt-4 mt-lg-0">
                <img className="contact-button-in" src={require('../../images/Contact_instagram.png').default}></img>
                <img className="logo-image" src={require('../../images/instagram.png').default}/>
            </div>
            <div className="col-lg-2 contact-button mt-4 mt-lg-0">
            <img className="contact-button-in" src={require('../../images/Contact_twitter.png').default}></img>
            <img className="logo-image" src={require('../../images/twitter.png').default}/>
            </div>
            <div className="col-lg-2 contact-button mt-4 mt-lg-0">
            <img className="contact-button-in" src={require('../../images/Contact_email.png').default}></img>
            <img className="logo-image" src={require('../../images/mail.png').default}/>
            </div>
            <div className="col-lg-2 contact-button mt-4 mt-lg-0">
            <img className="contact-button-in" src={require('../../images/Contact_linkedIn.png').default}></img>
            <img className="logo-image" src={require('../../images/linkedIn.png').default}/>
            </div>
            <div className="col-lg-2 contact-button mt-4 mt-lg-0">
            <img className="contact-button-in" src={require('../../images/Contact_facebook.png').default}></img>
            <img className="logo-image" src={require('../../images/facebook.png').default}/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ContactUs;
