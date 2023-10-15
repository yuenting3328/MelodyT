import React from "react";
import '../WorkItem1/workItem1.css';
import muji from '../../images/muji.gif';
import { Link } from "react-router-dom";

const WorkItem2 = () => {
    return(
        <section id="frame">
            <div className="workIntro1">
        {/* <span className="number1">2</span> */}
        <span className="project1">Warmtle</span>
        <p className="workTime">Self initiated project  |  December 2020 </p>
        <p className="workDescrption">
        Working on case study project to improve a brand using
        new design ideas
        </p>
        <Link to="/muji" className="work-nav-link">
        View Project &gt;
        </Link>
        <div className="detail">
        <div className="workService">
        <p className="service">Service</p>
        <p className="duty">UX/UI Design, Product Design, Graphic Design</p>
        </div>
        <div className="media">
        <p className="press">Press</p>
        <a
        className="link"
        href="https://xd.adobe.com/view/c8ddef2b-3213-4711-9e00-df467d19515a-9d8e/?fullscreen"
        rel="noopener noreferrer"
        target="_blank"
        >
        Warmtle Prototype
        </a>
        {/* <br></br>
        <br></br>
        <a
        className="link2"
        href="https://apps.apple.com/us/app/wings-mobile-app/id1445100404?ls=1"
        rel="noopener noreferrer"
        target="_blank"
        >
        WINGS Mobile App
        </a> */}
        </div>
        </div>
        </div>

        <img className="SFC" alt="Sfc" src={muji} />

        </section>
    )
}

export default WorkItem2