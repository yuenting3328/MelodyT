import React from "react";
import './selfDescription.css';
import bg2 from '../../images/about icon2.png';
import pccw from '../../images/pccw solutions.png';
import sfc from '../../images/sfc logo.png';
import motic from '../../images/motic logo.png';
import asl from '../../images/asl logo.png';
import mpfa from '../../images/mpfa logo.png';
import line from '../../images/Vector 19.png';
import ResumeBtn from "../ResumeBtn/resumeBtn.js";

const SelfDescription =() => {
 return(
    <div className="about">
<div className="frame-wrapper">
<div className="frame-2">
<div className="intro">
<img className="icon" alt="Icon" src={bg2} />
<div className="resume">
<p className="i-m-melody-tse-a-UX">
I&#39;m Melody Tse, a UX/UI Designer who is passionate about using technology and design to enhance the
lives of others. My expertise lies in taking ideas from wireframe to prototype and conducting user
research, interaction design, and practical operations for several corporates. <br />
<br />
With over 4 years of hands-on experience in digital product design, I have devoted the past 3 years to
specialize in User Experience and User Interface. Born and raised in Hong Kong, I have worked for
companies in over 7 industry sectors, creating digital applications and websites. <br />
<br />
Currently, I am focused on designing system design and implementation services for investment product
electronic applications on WINGS, a common platform for world-renowned SFC electronic forms and
submission services.
</p>
<ResumeBtn />
</div>
</div>
<div className="icon-list">
<div className="experience">
<img className="vector" alt="Vector" src={line} />
<div className="text-wrapper">Professional Experience:</div>
</div>
<div className="icons">
<img className="logo-en" alt="Logo en" src={pccw} />
<img className="securities-and" alt="Securities and" src={sfc} />
<img className="logo-mpfa" alt="Logo mpfa" src={mpfa} />
<img className="asl-logo-combo" alt="Asl logo combo" src={asl} />
<img className="motic" alt="motic" src={motic} />
</div>
</div>
</div>
</div>
</div>            
 )
}
export default SelfDescription