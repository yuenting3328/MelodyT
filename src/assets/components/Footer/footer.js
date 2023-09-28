import React from "react";
import './footer.css';
import logo from '../../images/Logo_white.png';
// import { KeyboardArrowUp } from "../../images/Keyboard arrow up.png";
// import upArrow from '../../images/arrowUp.svg';
// import Link from 'react-scroll';
import linkedin from '../../images/LinkedIn.png';
import behance from '../../images/Behance.png';
import instagram from '../../images/Instagram.png';
import youtube from '../../images/YouTube Logo.png';
import email from '../../images/Email.png';
// import Icon from "../../components/Icon/icon.js"

const Footer = () => {
    return (
<div className="footer">
<p className="text-wrapper">2023 - Melody Tse’s UX/UI Portfolio | Canada © All rights reserved.</p>
<div className="footerFrame">
<img className="footerLogo" alt="Logo" src={logo} />
<div className="footerDiv">
<div className="footerFrame-2">
<p className="get-in-touch">
<span className="footerSpan">Get in </span>
<span className="footer-text-wrapper-2">Touch</span>
</p>
<p className="footerParagraph">Feel free reach me out. I’m looking forward to hearing from you.</p>
</div>
<div className="footer-frame-3">
<a href="https://www.linkedin.com/in/melody-t-7b1b02135/" class="icon-nav-link" >   
<img className="footerImg" alt="Linked in" src={linkedin} />
</a>

<a href="https://www.behance.net/0769ad05" class="icon-nav-link" > 
<img className="footerImg" alt="Behance" src={behance} />
</a>

<a href="https://www.instagram.com/?next=%2F" class="icon-nav-link" > 
<img className="footerImg" alt="Instagram" src={instagram} />
</a>

<a href="https://www.youtube.com/channel/UCBY9y8Z8CZ40If-LLEBqIUg" class="icon-nav-link" > 
<img className="footerImg" alt="Youtube logo" src={youtube} />
</a>

<a href="mailto:yuenting3328@gmail.com" class="icon-nav-link" > 
<img className="footerImg" alt="Email" src={email} />
</a>
</div>
</div>
</div>
{/* <KeyboardArrowUp className="keyboard-arrow-up" /> */}
{/* <div className="action">
<button onclick={topFunction()} class="arrowUpBtn" id="arrowUpBtn"><Icon/></button>
</div> */}
</div>

    )
}

export default Footer