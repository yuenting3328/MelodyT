import React from "react";
import './introduction.css';

const Introduction = () => {
    return (
        <section id="selfIntroduction">
            <div className="selfIntroductionContainer">
            <div className="selfIntroductionContentContainer">
                <div className="myIcon">
                <img className="myIcon" alt="myIcon" src={myIcon} />
                </div>
                <div className="selfIntroductionTextContainer">
                    <p className="selfIntroductionDescription">
                    I&#39;m Melody Tse, a UX/UI Designer who is passionate about using technology and design to enhance the
                        lives of others. My expertise lies in taking ideas from wireframe to prototype and conducting user
                        research, interaction design, and practical operations for several corporates. <br />
                        <br />
                        With over 3 years of hands-on experience in digital product design, I have devoted the past 3 years to
                        specialize in User Experience and User Interface. Born and raised in Hong Kong, I have worked for
                        companies in over 7 industry sectors, creating digital applications and websites. <br />
                        <br />
                        Recently, I am focused on designing system design and implementation services for investment product
                        electronic applications on WINGS, a common platform for world-renowned SFC electronic forms and
                        submission services.
                    </p>
                    <div className="myBtn">
                        <a href = {cvPdf} ><ResumeBtn /></a>
                        </div>
                </div>
                </div>
                
            </div>
        </section>
    )
}