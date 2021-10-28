import React from "react";
import './AboutUs.css';
import personsArray from "../arrays/persons";

function Persons(){
    return(
        <>
          <div className="persons-heading mx-5 mb-4">OUR FOUNDERS AND EXECUTIVES</div>
          <div className="row persons-content mx-5 p-4 mb-2">
              
                  {
                      personsArray.map((item)=>{
                          var image = item.image;
                          return(
                          <div className="col-lg-4 col-md-4 col-12 my-1" >
                          <div className="each-person my-1">
                              <div className="mx-3 each-image">
                                  <img className="eachImage" src={image}/>
                                  <div className="social-links">
                                      <a href={item.instagram} target="_blank"><div className="each-social-link mx-1"><img className="social-link-image" src={require('../../images/instagram_black.png').default}/></div></a>
                                      {/*<div className="each-social-link mx-1"><img className="social-link-image" src={require('../../images/facebook_black.png').default}/></div>*/}
                                      <a href={item.twitter} target="_blank"><div className="each-social-link mx-1"><img className="social-link-image" src={require('../../images/twitter_black.png').default}/></div></a>
                                      <a href={item.linkedIn} target="_blank"><div className="each-social-link mx-1"><img className="social-link-image" src={require('../../images/linkedIn_black.png').default}/></div></a>
                                      
                                  </div>
                              </div>
                              <div className="each-down">
                                  <span className="persons-name">{item.name}</span><br/>
                                  <span className="persons-post">{item.post}</span>
                              </div>
                          </div>
                          </div>
                        )
                      })
                  }
             

          </div>
        </>
    )
}

export default Persons;