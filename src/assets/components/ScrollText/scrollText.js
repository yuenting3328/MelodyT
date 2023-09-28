import React from "react";
import './scrollText.css';
import bg from '../../images/about icon.png';

const ScrollText =() => {
 return(
    <section id="intro2">
    <div className="introContent">
    <section id="scrollText">
                <h1>Who am I?</h1>
                </section>
   </div>
   <img src={bg} alt="profile" className="bg" />
 </section>
 )
}
export default ScrollText