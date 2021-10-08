import React from 'react';
import './Workshop.css';
import workshops from '../arrays/workshops';
import { useState } from 'react';

function Workshops(){
    const [content,setContent]=useState(workshops[0].content);
    const [name,setName]=useState(workshops[0].name);
    const [posterBackground,setPosterBackground]=useState(workshops[0].posterBackground);
    const [posterText,setPosterText]=useState(workshops[0].posterImage); 
    const [posterElement,setPosterElement] = useState(workshops[0].posterElement)
    function changeImage(){
        var background = posterBackground;
        var bgImg = document.querySelector(".img-Area").style.background(posterBackground);
       
    }
    return(
        <>
        <h6 className="about-us mt-4 mx-5">ONGOING</h6><span className="horiLine"></span>
        <h6 className="who-we-are mx-5">WORKSHOPS</h6>
        <div style={{'textAlign':'center'}}>
        <div className="workshop-logos my-3">
            {
                workshops.map((item)=>{
                    return(
                        <div className="each-logo mx-4 px-3" 
                        onClick={()=>{
                            setContent(item.content);
                            setName(item.name);
                            setPosterBackground(item.posterBackground);
                        }}><img className="image-logo" src={item.image}/>
                            <span className="each-name">{item.name}</span>
                        </div>
                    )
                })
            }
        </div>
        </div>
        <div className="weekly mx-5 mb-2 p-4">
            <div className="row">
                       <div className="col-lg-7 col-md-7 col-12  mt-3">
                           <h6 className="content-name">{name}</h6>
                           {content}
                       </div>
                        <div className="col-lg-5 col-md-5 col-12 mt-3 poster">
                            <div id="img-area" className="img-Area" >
                                <img className="image1" src={posterBackground}/>
                            </div>
                        </div>
            </div>
        </div>
        </>
    )
}

export default Workshops;