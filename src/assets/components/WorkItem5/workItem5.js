import React from "react";
import '../WorkItem1/workItem1.css';
import HA from '../../images/HA.png';
import {Link} from 'react-router-dom';

const WorkItem5 = () => {
    return(
        <section id="frame">
            <div className="workIntro1">
        <span className="number1">5</span>
        <span className="project1">HA Go</span>
        <p className="workTime">Hospital Authority  |  June 2021</p>
        <p className="workDescrption">
        To enhance the Invited Carer experience through the
        implementation of a mobile solution
        </p>
        <Link to="/ha" className="work-nav-link">
        View Project &gt;
        </Link>
        <div className="detail">
        <div className="workService">
        <p className="service">Service</p>
        <p className="duty">UX/UI Design</p>
        </div>
        <div className="media">
        <p className="press">Press</p>
        <a
        className="link"
        href="https://apps.apple.com/hk/app/ha-go/id1469340861?l=en-GB"
        rel="noopener noreferrer"
        target="_blank"
        >
        HA Go Mobile App
        </a>
        {/* <br></br>
        <br></br>
        <a
        className="link2"
        href="https://xd.adobe.com/view/0c40d7fd-366b-41c6-63a1-3183ea9c991d-7a71/"
        rel="noopener noreferrer"
        target="_blank"
        >
        Trustee Portal Prototype
        </a> */}
        </div>
        </div>
        </div>
        <img className="SFC" alt="Sfc" src={HA} />
        </section>
    )
}

export default WorkItem5