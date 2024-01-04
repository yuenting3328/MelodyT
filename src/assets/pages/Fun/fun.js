import React, { useState} from "react";
import './fun.css';
import cacheBg from '../../images/Bg.png'
// import { Link } from 'react-router-dom';
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

const Fun = () =>{
    const [active, setActive] = useState("Motion Graphis");
    return (
        <section id="cache">
            <img src={cacheBg} alt="cacheBg" className="cacheBg" />
            <div className="cacheContentGreeting">Hi there!</div>
            <div className="cacheContentGreeting2">Let's have some <span className="gradientText">Fun!</span></div>
            <nav className="tagBtnList">
            <a href="#comp1">
                <button className="resumeBtn" onClick = {() =>setActive("Motion Graphis")}>Motion Graphis</button>
                </a>
                <a href="#comp2">
                <button className="resumeBtn" onClick = {() =>setActive("UI Styles")}>UI Styles</button>
                </a>
                <a href="#comp3">
                <button className="resumeBtn" onClick = {() =>setActive("Revamp Case")}>Revamp Case</button>
                </a>
            </nav>
         <div>            
                {active === "Motion Graphis" && <Comp1/>}
                {active === "UI Styles" && <Comp2/>}
                {active === "Revamp Case" && <Comp3/>}
            </div>
            {/* <div className="cacheContent">
                <span className="symbol">I can</span><Link to="/experience" className="hoverLink">Create Experience</Link><span className="symbol">, </span>
                <br></br>
                
                <Link to="/installation" className="hoverLink">Make Installation</Link><span className="symbol">, </span><Link to="/seal" className="hoverLink">Seal Engraving</Link><span className="symbol">.</span>
            </div> */}
            </section>
    )
    
}

export default Fun

