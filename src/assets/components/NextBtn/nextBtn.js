import React from "react";
import './nextBtn.css';
// import rightArrow from '../assets/images/right arrow.svg';

const NextBtn = () => {
    return(
        <button id="nextBtn">
            Next Project
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="rightArrow">
        <path d="M8 3C8.41799 3.41799 14.7762 10.1256 16.8508 12.3148C17.2166 12.7009 17.2129 13.3022 16.8466 13.6878L8 23" stroke="#163279" stroke-width="3" stroke-linecap="round"/>
       
    </svg>
    
 </button>
    )
}

export default NextBtn 