import React from "react";
import "./timeline.css";
import LearnBtn from "../LearnBtn/learnBtn.js";

const Timeline = () => {
    return (
      <section id="timeline">
           <div className="timelineContainer">
            <div className="timelineTitleContainer">
                <span className="timelineTitle">
                    My Journey for SFC Project
                </span>
            </div>
            <div className="sfcTimeline">
                <div className="eipSpeechBubbleContainer">
                <div className="eipProjectSpeechBubble">
                    <div className="eipProjectTextContainer">
                        <div className="eipProjecTitleContainer">
                            <span className="yearTitle">
                                2023
                            </span>
                            <span className="sfcProjectTitle">
                            e-Investment Products Project
                            </span>
                        </div>
                        <p className="sfcProjectDescription">
                        I have in charge of the UX/UI design aspect of the SFC project. In order to ensure a smooth process, I have created a design library and UI guidelines for SFC, translated user needs into user flows and wireframes, and created high quality prototypes for design solutions which were validated during soft consolidation workshops with users. Through constant incorporation of feedback and consistent platform design improvements.
                            </p>
                    </div>
                    <div className="btnContainer">
                    <a href="#eIP">
                    <LearnBtn />
                    </a>
                    </div>
                </div>
                </div>
            
            <div className="sfctimelineVectorContainer">
            <div className="timelineVectorContainer">
            <svg width="35" height="421" viewBox="0 0 35 421" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.1523" cy="17.5" r="10" fill="#0066CC"/>
            <circle cx="17.1523" cy="17.5" r="16" stroke="#0066CC" stroke-width="2"/>
            <path d="M17.1523 34.5V420.824" stroke="#0066CC" stroke-width="2"/>
            </svg>
            <svg width="35" height="421" viewBox="0 0 35 421" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.1523" cy="17.5" r="10" fill="#0066CC"/>
            <circle cx="17.1523" cy="17.5" r="16" stroke="#0066CC" stroke-width="2"/>
            <path d="M17.1523 34.5V420.824" stroke="#0066CC" stroke-width="2"/>
            </svg>
            </div>
            </div>
            <div className="nextGenSpeechBubbleContainer">
                <div className="nextGenProjectSpeechBubble">
                    <div className="nextGenProjectTextContainer">
                        <div className="nextGenProjecTitleContainer">
                            <span className="yearTitle">
                                2022
                            </span>
                            <span className="sfcProjectTitle">
                            Next Generation Project
                            </span>
                        </div>
                        <p className="sfcProjectDescription">
                        As the UI/UX designer, I listened to user needs and provided feedback to improve the system. Together with video designers and developers, we created user flow tutorial videos, which have been highly useful. Our teamwork resulted in successfully completing the project and receiving positive feedback from users.
                            </p>
                    </div>
                    <div className="btnContainer">
                    <a href="#nextGen">
                    <LearnBtn />
                    </a>
                    </div>
                </div>
           </div>
           </div>
           </div>
      </section>
    )
}

export default Timeline