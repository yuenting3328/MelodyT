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
            The SFC is seeking to implement a portal solution on both its website and mobile platform to accomplish four key goals: enhanced user-friendliness, more efficient and transparent licensing processes, better paperless functionality and digitalisation, and the eventual transition to fully electronic submission of all licensing documents.
            </p>
            </div>
            <div className="imgContainer" id="nextGenGoalImgContainer">
            <img src={nextGenGoal} alt="nextGenGoalImg" className="nextGenGoalImg" />
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
            I joined the project towards the end of the System Implementation and Integration stage. My responsibilities include designing user request pages and collaborating with business analysts to understand user requirements. I am also leading the video design team in creating tutorial videos for the system based on our plan.
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

        </section>
    )
}

export default NextGen