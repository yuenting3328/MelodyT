import React from "react";
import './work.css';
import bg from '../../images/icon photo.png';
import WorkItem1 from "../../components/WorkItem1/workItem1.js";
import WorkItem2 from "../../components/WorkItem2/workItem2.js";
import WorkItem3 from "../../components/WorkItem3/workItem3.js";
import WorkItem4 from "../../components/WorkItem4/workItem4.js";
import WorkItem5 from "../../components/WorkItem5/workItem5.js";
import Typewriter from "../../components/TypeWriter/typeWriter.js";


const Work = () => {
    return (
        <><section id="selfIntro">
            <div className="selfIntroContent">
                <span className="Hello">Hi there! I’m</span>
                <span className="selfIntroName">Melody Tse
                </span>
                <span className="selfIntroTitle"> a &nbsp; <Typewriter strings="UX/UI Designer" delay={300} infinite /></span>
                <span className="selfIntroLocation">based in Toronto, Canada
                </span>
                <p className="selfIntroPara">I strive to create digital products and websites that meet both business objectives and human needs. I stay curious to uncover valuable insights to enhance the design.</p>
            </div>
            <img src={bg} alt="profile" className="selfBg" />
            {/* <div className="action">
            <a id="btn" href="#workItem1"><img className="downArrow" src={downArrow} alt="down" /></a>
            </div> */}
        </section>
        
        <section id="workItem1"><WorkItem1 /></section>
        
        <section id="workItem2"><WorkItem2 /></section>
        <section id="workItem3"><WorkItem3 /></section>
        <section id="workItem4"><WorkItem4 /></section>
        <section id="workItem5"><WorkItem5 /></section>
        </>
    )
}

export default Work;