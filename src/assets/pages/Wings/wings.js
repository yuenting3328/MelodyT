import React from "react";
import "./wings.css";
import Timeline from "../../components/Timeline/timeline.js";
import NextGen from "../NextGen/nextGen.js";
import EIP from "../../pages/eIP/eip.js";
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import { Link } from "react-router-dom";
const WINGS = () => {
    return (
        <section id="wings">
             <div className="overlap-group-wrapper">
            <div className="overlap-group">
                </div>
            </div>
            <div className="wingsIntro">
                <div className="projectIntro">
                <span className="introTitle">
                WINGS
                </span>
                <p className="wingsIntroDescription">
                The Securities and Futures Commission (SFC) of Hong Kong is the independent statutory body charged with regulating the securities and futures markets in Hong Kong. The SFC is responsible for fostering an orderly securities and futures markets, to protect investors and to help promote Hong Kong as an international financial centre .
                <br/>
                <br/>
                In 2022, WINGS continues to be the go-to electronic submission platform for regulatory filings, applications, authorization, disclosure, surveys, and data submissions to the SFC. Conveniently accessed via website or mobile app, on-the-go access is always at your fingertips. Also, WINGS offers a range of impressive features. 
                </p>
                </div>  
                <div className="projectInfo">
                <div className="infoRow">
                    <span className="infoTitle">
                    Role
                    </span>
                    <p className="infoDescription">
                    UX/UI Designer
                    </p>
                </div>
                <div className="infoRow">
            <span className="infoTitle">
            Duration
            </span>
            <p className="infoDescription">
            2021, 2022, 2023
            </p>
        </div>
        <div className="infoRow">
            <span className="infoTitle">
            Tools
            </span>
            <p className="infoDescription">
            Figma, Final Cut Pro, Draw.io
            </p>
        </div>
        <div className="infoRow">
            <span className="infoTitle">
            Team
            </span>
            <p className="infoDescription">
            SFC Tech Team, Vendor's Design Team & Tech Team
            </p>
        </div>
        <div className="infoRow">
            <span className="infoTitle">
            Press
            </span>
            <p className="infoDescription">
            <a class="pressLink" href="https://wings.sfc.hk/main/#/en" > WINGS Website </a>
            <br/>
            <a class="pressLink" href="https://apps.apple.com/us/app/wings-mobile-app/id1445100404?ls=1" > WINGS Mobile App </a>
            </p>
        </div>    
        </div>
            </div>
            <div className="wingsOverviewContainer">
                <div className="wingsTextContainer">
                <span className="wingsOverviewTitle">
                    Overview
                </span>
            <p className="wingsOverviewDescription">
                I am excited to have joined two SFC projects aimed at achieving success in turning traditional submission processes to e-submission. Though both projects differ in their application types, they share the same objective. To maximize our efforts, I learned from the next generation licensing project and used the previous user feedback to initiate the e-investment products project. 
                <br/>
                <br/>
                While the next generation licensing project primarily focuses on internal SFC staff and external companies and lawyers, I realized the importance of catering to external users' needs. Thus, I suggested conducting a soft consultation workshop before the system analyst and design stage to receive valuable feedback from external users. This would ensure that the design aligns with both internal and external users' needs. I am glad that a SFC manager has supported this idea, and I am excited to see the workshop's positive impact on the project's success.
                </p>
            </div>
            </div>
            <div className="timelineContainer">
                <Timeline />
            </div>
            <section id="nextGen">
            <NextGen />
            </section>
            <section id="eIP">
            <EIP />
            </section>
            <div className="actionProject">
            <Link to="/ha" className="nav-link" >
     <LastBtn />
     </Link>
     <Link to="/muji" className="nav-link" >
     <NextBtn />
     </Link>
     </div>
        </section>

    )
}

export default WINGS