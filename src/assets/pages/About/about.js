import React from "react";
import './about.css';
// import bg from '../../images/about icon.png';
// import bg2 from '../../images/about icon2.png';
// import pccw from '../../images/pccw solutions.png';
// import sfc from '../../images/sfc logo.png';
// import motic from '../../images/motic logo.png';
// import asl from '../../images/asl logo.png';
// import mpfa from '../../images/mpfa logo.png';
// import ScrollText from "../../components/ScrollText/scrollText.js";
import SelfDescription from "../../components/SelfDescription/selfDescription.js";
import Skill from "../../components/Skill/skill.js";
import Endorsements from "../../components/Endorsements/endorsements.js";


const About = () => {
    return (
        <><section id="aboutMe">
            {/* <div className="introContent">
                {/* <article> */}
                {/* <h1>Who am I?</h1> */}
                {/* </article> */}
                {/* <div className="subtitleList">
            //     <span className="subtitle">I am a <span className="subtitle2">UX/UI Designer </span></span>
            //     <span className="subtitle">creating <span className="subtitle2">meaningful </span></span>
            //     <span className="subtitle">digital <span className="subtitle2">experience </span></span>
            //    </div> */} 
            {/* <ScrollText /> */}
           {/* </div>
           <img src={bg} alt="profile" className="bg" /> */}
         </section>
         
         <section id="aboutMeContent">
         <div className="aboutIntro">
         <SelfDescription />
</div>   
         </section>
         
         <section id="aboutSkill">
         <div className="aboutTool">
         <Skill />
</div>   
         </section>
         <section id="aboutReco">
         <div className="about">
         <Endorsements />
</div>   
         </section>
         </>
    )
}

export default About;