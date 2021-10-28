import React, { useState } from "react";
import './AboutUs.css';
import Persons from "./Persons";
import Footer from "../ContactUS/Footer";
import Modal from "react-modal";
const customStyles = {
    content: {
        
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid tomato',
        width: '350px',
        background:'#cbf1f5'
    }
};


function AboutUs(){
    function handleMissionOpen(){
        setMissionOpen(true);
    }
    function handleCloseMission(){
        setMissionOpen(false);
    }
    const [MissionOpen,setMissionOpen] = useState(false);
    const customStyles = {
        content: {
            padding: '20px',
            border:'none',
            width: '76%',
            position: 'absolute',
            height: '75%',
            left: '12%',
            top: '15%',
            background:'#cbf1f5'
        }
    };
        return(
            <>
                <div className=" about-us-box px-3 py-3 mx-5 my-4">
                <h6 className="about-us">ABOUT US</h6><span className="horiLine"></span>
                <h6 className="who-we-are">WHO WE ARE</h6>
                <p>Everyone has a desire to help people. But only a few can show it in action.
                    In that way, a group of like minded people took a step forward to join with a
                     one man organization and Cybernaut was developed.
                </p>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-3">
                        <img className="group-image" src={require('../../images/team-aboutus.jpeg').default}/>
                    </div>
                    <div className="col-12 col-lg-8 mb-3">
                        <p><span className="highlight">CYBERNAUT</span> - Endeavour to explore, was primarily started as a club and now, 
                            it has officially been declared as a startup community registered under 
                            MSME Our clear cut focus is to bring forth equal education to everyone 
                            irrespective of them being rich or poor. As some of the school students 
                            are not getting the right guidance, we are lending our hands to helping 
                            them choose the best career path and to develop their character.</p>
                        <p>Our key motto is <span className="highlight">"Sharing our knowledge to expand others knowledge."</span>
                            Nowadays, technology is everywhere. No one can survive without any 
                            technologyit has been an important aspect of everyone's fe As these 
                            innovations are changing on a daily basis, everyone has to be updating 
                            themselves about these technologies in that respect our community is 
                            conducting webinars to the freshers of all universities about the 
                            cutting edge technologies
                        </p>
                    </div>
                </div>
                </div>
                <div className="row vis-and-mis mx-5 mb-4">
                    <div className="col-12 col-md-6 col-lg-6 mt-4"><div className="vission  px-4 py-3"><div id="vis-heading">Vision</div>
                       <p style={{'margin-bottom':'1vh'}}>We give skilled people, an opportunity to practically implement their skills in the field. You 
                           can also be a fresher with basic knowledge and we are here to help and guide you to develop 
                           your skillset. Service is our main aim, we also have other domains such as content writing, 
                           graphic design, etc.</p>
                        <p className="keypoints">Our Keypoints of foucus are:</p>
                        <ul>
                            <li>To approach government schools and to aid the students with career advice.</li>
                            <li>To encourage the students to pick the right path on the technical side.</li>
                            <li>To improve the student's personality on the non-technical side.</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-4"><div className="mission  px-4 py-3"><div id="mis-heading">Mission</div>
                        <p>Through Cybernaut, you can learn technical skills like programming languages and advanced courses as well as non-technical ones like communication, personal development, and soft skills which helps shape yourself into a better person. Along with these skills, you can gain experience too. You can also be a part of social activities going to be done by us like tree planting, feeding the hungry and others.</p>
                        <div className="read-more-div"><span className={"read-more" + (MissionOpen ? " bor" : "")}
                        onClick={()=>handleMissionOpen()}>READ MORE</span></div>
                        </div>
                    </div>
                </div>
                <Persons />
                <Footer />
                <Modal isOpen={MissionOpen} className="modal-class" style={customStyles}>
                    <div id="mis-heading">Mission <i class="bi bi-x closebtn" onClick={()=>handleCloseMission()}></i></div>
                    <div className="mission-content">
                    <p>You might be wondering about the benefits of joining. We give an internship certificate at the end 
                            one month after joining. You can add your experiences to your resume which will be very 
                            helpful to impress your interviewer. And you can have a lot of personal development in 
                            this community by meeting and mingling with many young minds.</p>
                    <p>Furthermore, we conduct webinars on the latest technology and non-technical 
                        skills as well which helps you develop completely.</p>
                    <p><span>Programming languages and Advanced courses</span><br/>
                       New learnings help train your mind to handle a wide range of challenges. Starting with simple things is the best way. People who have an interest in computer science can try learning programming languages like C++ or Python. We at Cybernaut conduct workshops on both. 
                       If these languages are already known, then one should try learning some advanced courses like Data Science, Machine Learning, Cybersecurity, Ethical Hacking Web Development, and App Development. Soon workshops for these advanced courses will also be conducted.
                       </p>
                       <p><span>Communication, Personal Development, and Soft skills</span><br/>
                       Communication is the way one can convey a message and understand others clearly and accurately. Being able to communicate properly is very essential for any job or activity. 
                       Just like communication, personal development and soft skills are also important. Personal development helps you assess your life goals and values while building your skills and qualities to reach your maximum potential. Soft skills on the other hand help you fit in a place. 
                       Together the three helps you shape yourself into a great person. Some are naturally there, some have to be practiced and some have to be learned. Whether it has to be learned or practiced, Cybernaut is going to be conducting workshops on them to help you.
                       </p>
                       <p><span>Social Activities</span><br/>
                       Social activities are the things that members of a community together do to give back to society. It teaches you the value of things and empathy. develops. Such social activities are soon going to be done by the people of Cybernaut.
                       We will be planting trees- making our surroundings greener, cleaning India - picking up the trash, and clean the places which need it, fundraise and feed - conduct a fundraiser, and feed those who suffer from hunger daily and rainwater harvesting - help people collect and store the rainwater.
                       Every six months once, the members of Cybernaut will do these activities and give back to society.
                    </p>
                    </div>
                </Modal>
            </>
            
        );
}

export default AboutUs; 