import React from "react";
import "./nextGen.css";
import nextGenGoal from "../../images/wings goal.png";
import nextGenDesign from "../../images/wings design.png";
import nextGenWireframe from "../../images/wings wireframe.png";
import LearnBtn from "../../components/LearnBtn/learnBtn.js";
import nextGenVideo from "../../images/wings video.png";
const NextGen = () => {
    return(
        <section id="nextGen">
            <div className="projectGoalContainer">
            <div className="textContainer" id="nextGenGoalTextContainer">
            <span className="subtitle" id="nextGenGoalTitle">
            Next Generation Project
            </span>
            <span className="title" id="nextGenGoalTitle">
            Project Goal
            </span>
            <p className="description" id="nextGenGoalDescription">
            The SFC aims to provide a fully digitalized platform for users to prepare, sign, and submit licensing forms, track application progress, pay fees, and communicate with the SFC. Our companion mobile app, WINGS, offers key website features in a convenient format.
            <br/>
            <br/>
            As the SFC Chief Executive Officer, Mr Ashley Alder, has said, 
            “The next generation digital licensing platform integrates our front-loaded, risk-based approach, aligning our gatekeeping function with our other regulatory priorities." "It will help the industry manage licensing matters in a more flexible, secure manner, and communicate more efficiently with the SFC.”</p>
            </div>
            <div className="imgContainer" id="nextGenGoalImgContainer">
            <img src={nextGenGoal} alt="nextGenGoalImg" className="nextGenGoalImg" />
            </div>
            </div>

            <div className="projectGoalContainer">
            <div className="textContainer" id="nextGenGoalTextContainer">
            <span className="subtitle" id="nextGenGoalTitle">
            Next Generation Project
            </span>
            <span className="title" id="nextGenGoalTitle">
            The Problem
            </span>
            <p className="description" id="nextGenGoalDescription">
            I have joined the next generation licensing platform at the development stage, where most things were set such as the style guide and system. My task is to create an additional page based on user feedback, which must follow the same aesthetics and strategic direction utilizing existing components and SFC brand assets. The challenge is to provide a consistent experience across all feature pages.
            <br/>
            <br/>
            The next generation licensing platform is not just for external companies and lawyers for e-submission, but also integrates an SFC internal licensing approval system for SFC staff use. As the design stage focuses on the internal system user, we aim to guide the design process by providing demo videos for external users to learn how to use the platform features.</p>
            </div>
            </div>

            <div className="nextGenDesignContainer">
            <div className="nextGenDesignTextContainer" id="nextGenDesignTextContaier">
            <span className="subtitle" id="nextGenDesignTitle">
            Next Generation Project
            </span>
            <span className="title" id="nextGenDesignTitle">
            Design Process & Deliverables
            </span>
            <p className="description" id="nextGenDesignDescription">
            My responsibilities include designing user request pages and collaborating with business analysts to understand user requirements. I am also leading the video design team in creating tutorial videos for the system based on our plan.
            </p>
            </div>
            <div className="imgContainer" id="nextGenDesignImgContainer">
            <img src={nextGenDesign} alt="nextGenDesignImg" className="nextGenDesignImg" />
            </div>
            </div>

            <div className="nextGenWireframeContainer">
            <div className="textContainer" id="nextGenWireframeTextContaier">
            <span className="subtitle" id="nextGenWireframeTitle">
            Next Generation Project
            </span>
            <span className="title" id="nextGenWireframeTitle">
            Wireframe & User Interface
            </span>
            <p className="description" id="nextGenWireframeDescription">
            I listened to the user's ideas during a discussion with the business analyst and used them to create a wireframe. The wireframe helps users confirm their ideas. After the users approved the wireframe, I summarized the key elements of the user interface and designed it visually.
            </p>
            </div>
            <div className="imgContainer" id="nextGenWireframeImgContainer">
            <img src={nextGenWireframe} alt="nextGenWireframeImg" className="nextGenWireframeImg" />
            </div>
            </div>

            <div className="nextGenVideoContainer">
            <div className="textContainer" id="nextGenVideoTextContaier">
            <span className="subtitle" id="nextGenVideoTitle">
            Next Generation Project
            </span>
            <span className="title" id="nextGenVideoTitle">
            Tutorial Video Editing
            </span>
            <p className="description" id="nextGenVideoDescription">
            I supervised and trained a team of two video designers to edit tutorial videos in accordance with the script and SFC guidelines. Despite a challenging deadline, we were able to finalize the edits efficiently and received commendable feedback from the client. With the success of this final task, the project has come to a close with favorable user feedback.
            </p>
            <div className="nextGenBtnContainer">
            <a
            className="link"
            href="https://wings.sfc.hk/main/#/en/demo-video"
            rel="noopener noreferrer"
            target="_blank"
            > <LearnBtn />
            </a>
            </div>
            </div>
            <div className="imgContainer" id="nextGenVideoImgContainer">
            <img src={nextGenVideo} alt="nextGenVideoImg" className="nextGenVideoImg" />
            </div>
            </div>

            <div className="nextGenWireframeContainer">
            <div className="textContainer" id="nextGenWireframeTextContaier">
            <span className="subtitle" id="nextGenWireframeTitle">
            Next Generation Project
            </span>
            <span className="title" id="nextGenWireframeTitle">
            Takeaways
            </span>
            <p className="description" id="nextGenWireframeDescription">
            Throughout this project, I had the pleasure of meeting incredible individuals who encouraged me to develop my skills. I had the opportunity to enhance my soft skills, including confidence, communication, and leadership. I took an active role in leading conversations, updating stakeholders, and presenting my point of view. Through asking insightful questions, I was able to overcome potential obstacles and improve user comprehension in the tutorial space, despite not having prior experience in this industry. 
            <br/>
            <br/>
            Notably, I also had the chance to lead two talented video designers, ensuring that we met our tight deadlines. I owe a great deal of thanks to my exceptional project manager, who supported my growth and provided invaluable lessons that will continue to benefit me in future endeavours.
            </p>
            </div>
        
            </div>

        </section>
    )
}

export default NextGen