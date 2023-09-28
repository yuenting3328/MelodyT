import React from "react";
import './workItem1.css';
import sfc from '../../images/SFC.png';
import {Link} from 'react-router-dom';


const WorkItem1 = () => {

    return(
        <section id="frame">
            <div className="workIntro1">
        <span className="number1">1</span>
        <span className="project1">WINGS</span>
        <p className="workTime">SFC  |  June 2023</p>
        <p className="workDescrption">
        Designing a common platform for SFC electronic forms 
        and submission services
        </p>
        <Link to="/wings" className="work-nav-link">
        View Project &gt;
        </Link>
        <div className="detail">
        <div className="workService">
        <p className="service">Service</p>
        <p className="duty">UX/UI Design, Video Editing</p>
        </div>
        <div className="media">
        <p className="press">Press</p>
        <a
        className="link"
        href="https://wings.sfc.hk/main/#/en"
        rel="noopener noreferrer"
        target="_blank"
        >
        WINGS Website
        </a>
        <br></br>
        <br></br>
        <a
        className="link2"
        href="https://apps.apple.com/us/app/wings-mobile-app/id1445100404?ls=1"
        rel="noopener noreferrer"
        target="_blank"
        >
        WINGS Mobile App
        </a>
        </div>
        </div>
        </div>
        <img className="SFC" alt="Sfc" src={sfc} />
        </section>
    )
}

export default WorkItem1