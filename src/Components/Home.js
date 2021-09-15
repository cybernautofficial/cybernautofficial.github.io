import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import array from "../Components/array";
import Workshops from "./Workshops/Workshops";
import Footer from './ContactUS/Footer';

import '../Styles/Home.css'

class Home extends Component{
     handleAnimation(){
        
    }
    render(){
        return(
            <div style={{'fontFamily':'Montserrat'}}>
                <section id="slider">
		             
		             <input type="radio" name="slider" id="s2"checked/>
		             <input type="radio" name="slider" id="s3"checked/>
		             <input type="radio" name="slider" id="s4"checked/>
	                 <input type="radio" name="slider" id="s5"checked/>
                     <input type="radio" name="slider" id="s1"checked/>
		             <label for="s1" id="slide1">
                        <video  src={require("../images/initialVideo.mp4").default} loop autoPlay muted width="100%" height="100%">
		                </video>
                     </label>
		             <label for="s2" id="slide2"><img src={require('../images/suryaPoster2.jpeg').default}/></label>
		             <label for="s3" id="slide3"><img src={require('../images/cybernautPoster.jpeg').default}/></label>
		             <label for="s4" id="slide4"><img src={require('../images/drinks.png').default}/></label>
		             <label for="s5" id="slide5"><img src={require('../images/suryaPoster2.jpeg').default}/>{/*<video  src={require("../images/video/video2.mp4").default} loop autoPlay muted width="100%" height="100%">
		                </video>*/}</label>
	            </section>
               <div className="joinCommunity mx-5 mb-4 mt-3">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-12" style={{'paddingLeft':'20px'}}>
                        <span className="jCques">Want to help people but don't know where to start ?</span><br/>
                        That's where we come in, we are a group of youngsters
                        who help students to pursue their jobs and skills
                       </div>
                       <div className="col-12 col-md-5 col-lg-5 join-link-div">
                          <div style={{'width':'100%'}}><a className="joinLink" target="_blank" href="https://forms.gle/rCtRiFq9BEMgKdro9">JOIN OUR COMMUNITY</a></div>
                       </div>
                    </div>
                </div>
                <h6 className="recent mx-5">RECENT</h6><span className="horiLine"></span>
                <h6 className="announcements mx-5">ANNOUNCEMENTS</h6>
                <div className="scroll mx-5 mb-3">
                   <div className="row">
                       <div className="col-lg-10 col-md-10 col-12 outer-border-announce">
                       <div className="border-announce">
                           <ul className="list-announcement">
                           {
                               array.map((item)=>{
                                   return <li className="announce-list">
                                       <div className="row">
                                       <div className="col-lg-3 col-md-3 col-12 announcement-logo">
                                       <img src={item.image}/>
                                       </div>
                                       <div className="col-12 col-lg-8 col-md-8 announcement-content">
                                           {item.content}
                                           <div style={{marginTop:"20px"}}><a className="regHere">Register Here</a></div>
                                       </div>
                                       </div>
                                   </li>
                               })
                           }
                           </ul>
                       </div>
                       </div>
                       <div className="col-lg-2 col-md-2 col-12 bigger-announce">
                          <div className="white-division"></div>
                          <div className="white-division"></div>
                          <div className="white-division"></div>
                       </div>
                   </div>
                </div>
                <Workshops/>
                <Footer/>
            </div>
        );
    }
}
export default Home;