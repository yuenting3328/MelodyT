import React from "react";
import './fun.css';
import cacheBg from '../../images/Bg.png'
import { Link } from 'react-router-dom';

const Fun = () =>{
    return (
        <section id="cache">
            <img src={cacheBg} alt="cacheBg" className="cacheBg" />
            <div className="cacheContent">
                <span className="symbol">I can</span><Link to="/experience" className="hoverLink">Create Experience</Link><span className="symbol">, </span>
                <br></br>
                
                <Link to="/installation" className="hoverLink">Make Installation</Link><span className="symbol">, </span><Link to="/seal" className="hoverLink">Seal Engraving</Link><span className="symbol">.</span>
            </div>
            </section>
    )
}

export default Fun

