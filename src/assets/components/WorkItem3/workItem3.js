import React from "react";
import '../WorkItem1/workItem1.css';
import eMPF from '../../images/empf.gif';
import {Link} from 'react-router-dom';
const WorkItem3 = () => {
    return(
        <section id="frame">
            <div className="workIntro1">
        {/* <span className="number1">3</span> */}
        <span className="project1">eMPF Portal</span>
        <p className="workTime">MPFA  |  August 2022</p>
        <p className="workDescrption">
        Designing a web platform provide comprehensive MPF
        scheme administration services to 4.7 million MPF 
        scheme members and 300,000 employers
        </p>
        <Link to="/empf" className="work-nav-link">
        View Project &gt;
        </Link>
        <div className="detail">
        <div className="workService">
        <p className="service">Service</p>
        <p className="duty">UX/UI Design, UI Development</p>
        </div>
        <div className="media">
        <p className="press">Press</p>
        <a
        className="link"
        href="https://xd.adobe.com/view/bba2fc9c-0f04-4122-9f79-ba3615656ec2-eef1/"
        rel="noopener noreferrer"
        target="_blank"
        >
        eMPF Styleguide
        </a>
        <br></br>
        <br></br>
        <a
        className="link2"
        href="https://xd.adobe.com/view/0c40d7fd-366b-41c6-63a1-3183ea9c991d-7a71/"
        rel="noopener noreferrer"
        target="_blank"
        >
        Trustee Portal Prototype
        </a>
        </div>
        </div>
        </div>
        <img className="SFC" alt="Sfc" src={eMPF} />
        </section>
    )
}

export default WorkItem3