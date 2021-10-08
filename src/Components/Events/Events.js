import React from 'react';
import eventArray from '../arrays/eventArray';
import './Events.css';
import Footer from '../ContactUS/Footer';

function Event(){
    return(
    <>
      <h6 className="mx-2 mx-lg-5 mx-md-5 mt-3 ongoing">ONGOING</h6><span className="horiLine"></span>
      <h6 className="mx-2 mx-lg-5 mx-md-5 events">EVENTS</h6>
      <div className="heading">
            <span className="webinars">ONGOING WEBINARS</span>
      </div>
      <div className="row mx-lg-5 mx-1 mx-md-5 mb-5" style={{'fontFamily':'Montserrat'}}>
          {
              eventArray.map((item)=>{
                  var image = item.image;
                  return(
                      <>
                      <div className="col-12 col-md-6 col-lg-4 px-0">
                          <div className="events-div">
                          <img className="events-div-image" src={image}/>
                          <div className="events-div-write p-2">
                          <div className="events-div-title">{item.title}</div>
                          <div className="events-div-place">{item.place}</div>
                          <div className="events-div-content">{item.content}</div>
                          </div>
                          </div>
                      </div>
                      
                      </>
                  )
              })
          }
      </div>
      <Footer/>
    </>
    )
}

export default Event;