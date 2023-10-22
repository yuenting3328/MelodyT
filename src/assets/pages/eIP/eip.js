import React from "react";
import "./eip.css";
import joinedEIP from "../../images/wings eIP.png";
import eIPResearch1 from "../../images/wings research.png";
import eIPResearch2 from "../../images/wings research2.png";
import eIPPlanning1 from "../../images/wings persona.png";
import eIPPlanning2 from "../../images/wings storyboard.png";
import eIPPlanning3 from "../../images/wings eIP wireframe.png";
import eIPDesign from "../../images/wings design system.png";
import eIPPrototype from "../../images/sfc prototype.gif";

const EIP = () => {
    return(
        <section id="eIP">
            <div className="joinedEIPContainer">
            <div className="textContainer" id="joinedEIPTextContaier">
            <span className="joinedEIPSubtitle" id="joinedEIPSubtitle">
            Sep 2022
            </span>
            <span className="title" id="joinedEIPTitle">
            Joined e-IP Project
            </span>
            <p className="description" id="joinedEIPDescription">
            Due to receiving positive feedback from clients of SFC, Automated Systems (HK) Limited has extended an invitation for me to join their team. The reason for this invitation is their recent acquisition of a new project from SFC, called e-Investment Products Project (e-IP Project). Their request is for me to lead the UX/UI Design aspect of this exciting new project.
            </p>
            </div>
            <div className="imgContainer" id="joinedEIPImgContainer">
            <img src={joinedEIP} alt="joinedEIPImg" className="joinedEIPImg" />
            </div>
            </div>

            <div className="eIPGoalContainer">
            <div className="textContainer" id="eIPGoalTextContaier">
            <span className="subtitle" id="eIPGoalSubtitle">
            e-IP Project
            </span>
            <span className="title" id="eIPGoalTitle">
            Project Goal
            </span>
            <p className="description" id="eIPGoalDescription">
            We are working on designing and implementing a new electronic submission service on the existing WINGS platform, aimed at external parties. This service will enable them to prepare and submit investment product-related authorization and post-authorization applications to the SFC. 
            </p>
            </div>
            </div>

            <div className="eIPGoalContainer">
            <div className="textContainer" id="eIPGoalTextContaier">
            <span className="subtitle" id="eIPGoalSubtitle">
            e-IP Project
            </span>
            <span className="title" id="eIPGoalTitle">
            The Problem
            </span>
            <p className="description" id="eIPGoalDescription">
            "How can we help external users easily learn e-submission platform to work more efficiently?"
            <br/>
            <br/>
            e-IP is designed to be used with accuracy and efficiency. e-IP can provide a better user experience by  help the industry manage investment product matters in a more flexible, secure manner, and communicate more efficiently with the SFC.
            </p>
            </div>
            </div>

            <div className="eIPResearchContainer">
            <div className="textContainer" id="eIPResearchTextContaier">
            <span className="subtitle" id="eIPResearchSubtitle">
            e-IP Project
            </span>
            <span className="title" id="eIPResearchTitle">
            Define & Research
            </span>
            <p className="description" id="eIPResearchDescription">
            I collaborate closely with Business Analysts to understand and interpret user needs for our e-submission process. To achieve this, I engage in in-depth discussions with users in order to create detailed user journey that outline each step in the process. With this information in hand, I work with the Business Analysts to identify user requirements for transforming various applications into e-forms. Our aim is to create a seamless user experience that is as intuitive as it is efficient.
            </p>
            </div>
            <div className="eIPResearchImgContainer" id="eIPResearchImgContainer">
            <img src={eIPResearch1} alt="eIPResearchImg" className="eIPResearchImg" />
            <img src={eIPResearch2} alt="eIPResearchImg" className="eIPResearchImg" />
            </div>
            </div>

            <div className="eIPPlanningContainer">
            <div className="textContainer" id="eIPPlanningTextContaier">
            <span className="subtitle" id="eIPPlanningSubtitle">
            e-IP Project
            </span>
            <span className="title" id="eIPPlanningTitle">
            Analysis & Planning
            </span>
            <p className="description" id="eIPPlanningDescription">
            Using user feedback, I create user storyboards and personas to visualize the user journey and ensure that the Outcome meets the needs of our users. To ensure that my team is on the same page, I discuss the project vision with them and begin drafting wireframes that align with user requirements and my storyboard. 
            </p>
            </div>
            <div className="eIPPlanningImgContainer" id="eIPPlanningImgContainer">
            <img src={eIPPlanning1} alt="eIPPlanningImg" className="eIPPlanningImg" />
            <img src={eIPPlanning2} alt="eIPPlanningImg" className="eIPPlanningImg" />
            <img src={eIPPlanning3} alt="eIPPlanningImg" className="eIPPlanningImg" />
            </div>
            </div>

            <div className="eIPDesignContainer">
            <div className="textContainer" id="eIPDesignTextContaier">
            <span className="subtitle" id="eIPDesignSubtitle">
            e-IP Project
            </span>
            <span className="title" id="eIPDesignTitle">
            Working within a design system
            </span>
            <p className="description" id="eIPDesignDescription">
            I designed my project to scale it as a reusable component for the Design Library System for teams across SFC to adopt in custom solutions. I detailed development notes and handed-off an organized final Figma file to allow the engineer to jump in and implement without needing to ask for much input from design.
            </p>
            </div>
            <div className="imgContainer" id="eIPDesignImgContainer">
            <img src={eIPDesign} alt="eIPDesignImg" className="eIPDesignImg" />
            </div>
            </div>

            <div className="eIPPrototypeContainer">
            <div className="textContainer" id="eIPPrototypeTextContaier">
            <span className="subtitle" id="eIPPrototypeTitle">
            e-IP Project
            </span>
            <span className="title" id="eIPPrototypeTitle">
            Prototype & Testing
            </span>
            <p className="description" id="eIPPrototypeDescription">
            The use of a prototype can enhance the user experience during soft consultation workshops and provide valuable feedback on the project. 
            <br/>
            <br/>
            It's essential to test the interface with real users before moving on to the development stage to identify any areas for improvement. This feedback from the user's point of view can save time and resources, resulting in a better final product. By implementing revisions based on user testing, we can ensure a more seamless and successful launch.
            </p>
            {/* <div className="eIPBtnContainer">
            <a
            className="link"
            href="https://www.figma.com/proto/3Tl3FKPSoyY8Yh9YBNv00Y/%5BSFC-e-IP%5D-Soft-Consultation-v1.0-20230522?page-id=58%3A76791&type=design&node-id=1-372503&viewport=578%2C-601%2C0.02&t=YGPxfY2hruTDkd9r-1&scaling=scale-down&starting-point-node-id=1%3A372503&mode=design"
            rel="noopener noreferrer"
            target="_blank"
            > <LearnBtn />
            </a>
            </div> */}
            </div>
            <div className="eIPPrototypeimgContainer" id="eIPPrototypeImgContainer">
            <img src={eIPPrototype} alt="eIPPrototypeImg" className="eIPPrototypeImg" />
            </div>
            </div>

            <div className="eIPPrototypeContainer">
            <div className="textContainer" id="eIPPrototypeTextContaier">
            <span className="subtitle" id="eIPPrototypeTitle">
            e-IP Project
            </span>
            <span className="title" id="eIPPrototypeTitle">
            Takeaways
            </span>
            <p className="description" id="eIPPrototypeDescription">
            <br/>
            Undertaking a project independently provided me with a valuable opportunity to navigate the entire design thinking process. Throughout the project, I honed my critical thinking skills and prioritized attention to detail, ensuring that all business objectives and user requirements were met in the development of e-IP service.
            <br/>
            <br/>
            Collaboration with business analysts allowed me to gain a clear understanding of user needs through a logical approach to balancing design goals with project objectives. Meanwhile, my collaboration with development teams helped me to better understand edge cases and backend logic. As a result, I was able to build a component for the Design Library System, which streamlined the translation of design concepts into coding, making the project run smoothly and efficiently.
            <br/>
            <br/>
            My approach involved a meticulous exploration of different design approaches. I engaged with internal and external users to conduct various experiments aimed at optimizing the user experience of the service. By involving stakeholders at every step of the process and continuously iterating, I was able to develop an intuitive and robust service that effectively meets all business objectives and user needs.
            </p>
            </div>
            </div>
        </section>
    )
}

export default EIP