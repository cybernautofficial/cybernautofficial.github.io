import React from 'react';

function Webinar(){
    return(
        <>
        
        <div className="row mx-5 " style={{'fontFamily':'Montserrat'}} >
          {
              eventArray.map((item)=>{
                  var image = item.image;
                  return(
                      <div className="col-12 col-md-3 col-lg-3 px-0 mb-5 events-div">
                          <img className="events-div-image" src={image}/>
                          <div className="events-div-write p-2">
                          <div className="events-div-title">{item.title}</div>
                          <div className="events-div-place">{item.place}</div>
                          <div className="events-div-content">{item.content}</div>
                          </div>
                      </div>
                  )
              })
          }
      </div>
        </>
    )
}

export default Webinar;