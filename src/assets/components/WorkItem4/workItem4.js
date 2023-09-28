import React from "react";
import '../WorkItem1/workItem1.css';
import motic from '../../images/motic.png';
import {Link} from 'react-router-dom';

const WorkItem4 = () => {
    return(
        <section id="frame">
            <div className="workIntro1">
        <span className="number1">4</span>
        <span className="project1">Motic America</span>
        <p className="workTime">Motic Hong Kong Limited  |  December 2020</p>
        <p className="workDescrption">
        Expand the products offering faster than is normally 
        possible within an offline business situation
        </p>
        <Link to="/motic" className="work-nav-link">
        View Project &gt;
        </Link>
        <div className="detail">
        <div className="workService">
        <p className="service">Service</p>
        <p className="duty">Branding Design, Website Design</p>
        </div>
        <div className="media">
        <p className="press">Press</p>
        <a
        className="link"
        href="https://moticmicroscopes.com/"
        rel="noopener noreferrer"
        target="_blank"
        >
        Motic America Website
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
        <img className="SFC" alt="Sfc" src={motic} />
        </section>
    )
}

export default WorkItem4