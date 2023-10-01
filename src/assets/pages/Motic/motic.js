import React from "react";
import "./motic.css";
import moticChallenge from"../../images/motic challenge1.png";
import moticChallengeImg2 from"../../images/motic challenge2.png";
// import moticVideo from "../../video/motic video.mp4";
import moticSolution1 from "../../images/motic solution1.png";
import moticSolution2 from "../../images/motic solution2.png";
import moticDesign from "../../images/motic  design.png"
import moticWireframe1 from "../../images/motic wireframe1.png";
import moticWireframe2 from "../../images/motic wireframe2.png";
import moticOutcome1 from "../../images/motic outcome1.png";
import moticOutcome2 from "../../images/motic outcome2.png";
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
const Motic = () => {
    return(
    <section id="motic">
        <div className="overlap-group-wrapper">
           <div className="overlap-group">
            </div>
        </div>
        <div className="moticIntro">
            <div className="porjectIntro">
            <span className="introTitle">
            Motic America
            </span>
            <p className="introDescription">
            Motic Microscopes is a leading expert in the field of microscopy, offering a comprehensive range of both conventional and digital solutions. With an eye towards the future, Motic recognizes the increasing importance of e-commerce and has therefore adopted digitalization as a core component of their sales strategy. 
            <br/>
            <br/>
            Motic understands the need to keep pace with emerging trends and recognize that traditional sales methodologies are no longer sufficient to meet the needs of their clients.
            </p>
            </div>  
            <div className="projectInfo">
            <div className="infoRow">
                <span className="infoTitle">
                Date
                </span>
                <p className="infoDescription">
                March 2020
                </p>
            </div>
            <div className="infoRow">
        <span className="infoTitle">
        Client
        </span>
        <p className="infoDescription">
        Motic Hong Kong Limited   
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        My role
        </span>
        <p className="infoDescription">
        Website & Graphic Designer
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        What I did?
        </span>
        <p className="infoDescription">
        Branding, Website Design
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Press
        </span>
        <p className="infoDescription">
        <a class="pressLink" href="https://moticmicroscopes.com/" > Motic America Website </a>
        </p>
    </div>    
    </div>
        </div>
    <div className="challengeContainer">
    <div className="imgContainer" id="moticChallengeImgContainer">
        <img src={moticChallenge} alt="moticChallengeImg" className="moticChallengeImg" />
    </div>

    <div className="sideContainer" id="moticChallengeContainer">
    <img src={moticChallengeImg2} alt="moticChallengeImg2" className="moticChallengeImg2" />
    <div className="moticTextContainer">
    <span className="title" id="moticChallengeTitle">
            The Problem
            </span>
            <p className="description" id="moticChallengeDescription">
            To help all users make full use of the account function shortcut, it's worth noting that some may not be familiar with switching accounts through the add heart icon on the home page. Additionally, some users may find it beneficial to spend time carefully reviewing and comprehending the information in the "My Cares" page.
            </p>
    </div>
    </div>
    </div>

    <div className="moticSolutionContainer">
    <div className="textContainer" id="moticSolutionTextContaier">
            <span className="title" id="moticSolutionTitle">
            The Solution
            </span>
            <p className="description" id="moticSolutionDescription">
            To effectively communicate Motic's value proposition - "Professional and cool" - through design, a video underwent several iterations. Ultimately, it was refined to maximize impact and convey the desired message. Further, this video was proposed for use in the website's design to capture the attention of the target customer base.
            </p>
            </div>
            <div className="videoOutsideContainer">
            <div className="videoContainer">
            <iframe src='https://www.youtube.com/watch?v=JcM0LgD1Ugk&t=5s'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='moticVideo'
            className="moticVideo"
            />
            {/* <video src={moticVideo} className="moticVideo" controls autoplay /> */}
            </div>
            <div className="moticImgRow">
            <img src={moticSolution1} alt="moticSolution1" className="moticSolutionItem" />
            <img src={moticSolution2} alt="moticSolution2" className="moticSolutionItem" />
            </div>
            </div>
        </div>   

         <div className="moticDesignContainer">
    <div className="textContainer" id="moticDesignTextContaier">
            <span className="title" id="moticDesignTitle">
            Design Process & Deliverables
            </span>
            <p className="description" id="moticDesignDescription">
            After editing the appealing video, the project of creating the company website was initiated step by step. Discussions were held with colleagues from various regions to gather ideas from everyone involved.
            </p>
            </div>  
            <div className="imgContainer" id="moticDesignmgContainer">
            <img src={moticDesign} alt="moticDesignImg" className="moticDesignImg" />
        </div>
        </div>
        <div className="moticWireframeContainer">
    <div className="textContainer" id="moticWireframeTextContaier">
            <span className="title" id="moticWireframeTitle">
            Wireframe
            </span>
            <p className="description" id="moticWireframeDescription">
            The design process started with a flowchart and a wireframe to have a complete overview of all features.In order to capture the interest of our target customers, we implemented four attention-grabbing action buttons beneath the video banner. Once viewers have reviewed our content, they are presented with several options to choose from, including the ability to request a demo, a quote, locate a dealer, or access technical support.
            </p>
            </div>  
            <div className="moticImgList">
            <img src={moticWireframe1} alt="moticWireframeImg1" className="moticWireframeImg1" />
            <img src={moticWireframe2} alt="moticWireframeImg2" className="moticWireframeImg2" />
        </div>
            </div>   

            <div className="moticOutcomeContainer">
    <div className="textContainer" id="moticOutcomeTextContaier">
            <span className="title" id="moticOutcomeTitle">
            The Visual Merchandise Website
            </span>
            <p className="description" id="moticOutcomeDescription">
            The visual design and development of the project was a collaborative effort between an internal team and myself. We worked together to review and refine the project, with the final editing completed using Shopify.
            </p>
            </div>  
            <div className="moticOutcomeImgList">
            <img src={moticOutcome1} alt="moticOutcomeImg1" className="moticOutcomeImg1" />
            <img src={moticOutcome2} alt="moticOutcomeImg2" className="moticOutcomeImg2" />
        </div>
            </div>   
            <div className="actionProject">
     <LastBtn />
     <NextBtn />
     </div>
    </section>
    )
}

export default Motic