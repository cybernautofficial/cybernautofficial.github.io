import React from 'react';
import './ContactUs.css';

function Footer(){
    return(
    <>
    <div className="footer mt-4">
        <div className="footer-heading my-2">
            <div>CYBERNAUT</div>
            <span className="horiLine-footer"></span>
            <div>ENDEAVOUR TO EXPLORE</div>
        </div>
        <div className="address my-4">13th dhanalakshmi street, Maduravoyal, Chennai 600095 Tamilnadu, India</div>
        <div className="follow mb-3">FOLLOW US ON</div>
        <div className="logo mb-3">
            <a  href="https://www.instagram.com/cybernaut_official/" target="_blank"><img className="logo-footer-image mx-2" src={require('../../images/instagram_black.png').default}/></a>
            <a href="https://twitter.com/cybernaut_offic" target="_blank"><img className="logo-footer-image mx-2" src={require('../../images/twitter_black.png').default}/></a>
            <a href="https://www.instagram.com/cybernaut_official/" target="_blank"><img className="logo-footer-image mx-2" src={require('../../images/facebook_black.png').default}/></a>
            <a href="https://www.youtube.com/channel/UCxWIRKpUen9sKwzd8NxEyBQ" target="_blank"><img className="logo-footer-image mx-2" style={{'width':'40px'}} src={require('../../images/youtube_black.png').default}/></a>
            <a href="https://www.linkedin.com/company/cybernaut/mycompany/" target="_blank"><img className="logo-footer-image mx-2" src={require('../../images/linkedIn_black.png').default}/></a>
        </div>
        <div className="copyrights"><i class="bi bi-at"></i>Copyright Cybernaut. All Rights Reserved</div>

    </div>
    </>
    )
}

export default Footer;