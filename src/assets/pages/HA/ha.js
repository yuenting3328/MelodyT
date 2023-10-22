import React from "react";
import "./ha.css";
import haGoal from "../../images/HA goal.png";
import haProblem from "../../images/HA problem.png";
import haResearch from "../../images/HA research.png";
import haSolution from "../../images/HA outcome.png";
import haGraphic from "../../images/hagraphic.gif";
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import { Link } from "react-router-dom";
const HA = () => {
    return (
     <section id="ha">
        <div className="overlap-group-wrapper">
           <div className="overlap-group">
            </div>
        </div>
        <div className="haIntro">
            <div className="projectIntro">
            <span className="introTitle">
            HA Go
            </span>
            <p className="haIntroDescription">
            HA Go is the all-in-one app developed by the Hospital Authority (HA) to bring you a range of comprehensive healthcare management solutions in one convenient location. With a variety of new features and functions, HA Go streamlines patient care with easy-to-use tools that keep you in control of your healthcare journey. 
            <br/>
            <br/>
            Over a million people have chosen HA Go to manage their health with ease, and the app boasts a 3.6-star rating out of 5. Experience the convenience of HA Go today and take charge of your health.
            </p>
            </div>  <div className="projectInfo">
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
        3 months 
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Tools
        </span>
        <p className="infoDescription">
        Sketch, Adobe Illustrator  
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Team
        </span>
        <p className="infoDescription">
        PCCW Solution Design Team 
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Press
        </span>
        <p className="infoDescription">
        <a class="pressLink" href="https://apps.apple.com/us/app/ha-go/id1469340861"  > HA Go App </a>
        </p>
    </div>    
    </div>
        </div>
        <div className="haProjectGoalContainer">
            <div className="haTextContainer" id="haGoalTextContaier">
            <span className="haTitle" id="haGoalTitle">
            Project Goals
            </span>
            <p className="haDescription" id="haGoalDescription">
            The Hospital Authority introduced the HA Go mobile application in 2019, and they are now seeking to enhance the Invited Carer experience through the implementation of a mobile solution. The aim is to streamline the Invited Carer process and further develop the Invited Carer Guideline within the HA Go platform.
            </p>
            </div>
        <div className="imgContainer" id="haGoalImgContainer">
        <img src={haGoal} alt="haGoalImg" className="haGoalImg" />
    </div>
    </div>

    <div className="problemContainer">
            <div className="haTextContainer" id="haProblemTextContaier">
            <span className="haTitle" id="haProblemTitle">
            The Problem
            </span>
            <p className="haDescription" id="haProblemDescription">
            To help all users make full use of the account function shortcut, it's worth noting that some may not be familiar with switching accounts through the add heart icon on the home page. Additionally, some users may find it beneficial to spend time carefully reviewing and comprehending the information in the "My Cares" page.
            </p>
            </div>
        <div className="imgContainer" id="ProblemImgContainer">
        <img src={haProblem} alt="haProblemImg" className="haProblemImg" />
    </div>
    </div>

    <div className="researchContainer">
            <div className="haTextContainer" id="haResearchTextContaier">
            <span className="haTitle" id="haResearchTitle">
            Research
            </span>
            <p className="haDescription" id="haResearchDescription">
            I have studied Gmail's design and find their user icon to be quite impressive, as it offers quick access to several key actions, including changing, managing, and adding another account. Additionally, Gmail has incorporated intuitive micro-interactions that guide users through the product in an effortless and intuitive way, making for a more seamless user experience.
            </p>
            </div>
        <div className="imgContainer" id="ResearchImgContainer">
        <img src={haResearch} alt="haResearchImg" className="haResearchImg" />
    </div>
    </div>

    <div className="solutionContainer">
            <div className="haTextContainer" id="haSolutionTextContaier">
            <span className="haTitle" id="haSolutionTitle">
            The Solution
            </span>
            <span className="haSubtitle" id="haSolutionSubtitle">
            “Enhancing Usability of Changing Account”
            </span>
            <p className="haDescription" id="haSolutionDescription">
            To enhance user experience, we recommend the addition of a drop-down arrow shortcut button in the Gmail user icon function, allowing users to effortlessly switch between accounts in just a few clicks.
            <br/>
            <br/>
            As a widely recognized standard, the down arrow action typically implies an action that opens something hidden, making it easy for users to understand the button's function at a glance.
            <br/>
            <br/>
            By incorporating this simple shortcut, users can efficiently manage multiple accounts, providing a convenient and seamless account switching experience.
            </p>
            </div>
        <div className="imgContainer" id="SolutionImgContainer">
        <img src={haSolution} alt="haSolutionImg" className="haSolutionImg" />
    </div>
    </div>

    <div className="researchContainer">
            <div className="haTextContainer" id="haResearchTextContaier">
            <span className="haTitle" id="haResearchTitle">
            Creating graphics for visual learning
            </span>
            <p className="haDescription" id="haResearchDescription">
            In addition, I created detailed visual graphics for an operation guide on the invited caregiver feature. Since there were no specific requests regarding which screens to use from the HA Go app, my team and I went through numerous design files to evaluate the screens that could best showcase the information for better user understanding.
            <br/>
            <br/>
            These images were designed with the aim of making them easily comprehensible by target audiences of different age groups, while simultaneously maintaining the brand's consistency. To achieve this, I ensured that progressive situations were clearly drawn, highlighting relevant vital information.
            </p>
            </div>
        <div className="imgContainer" id="ResearchImgContainer">
        <img src={haGraphic} alt="haResearchImg" className="haResearchImg" />
    </div>
    </div>

    <div className="researchContainer">
            <div className="haTextContainer" id="haResearchTextContaier">
            <span className="haTitle" id="haResearchTitle">
            Takeaways
            </span>
            <span className="haSubtitle" id="haSolutionSubtitle">
            “Practice Make Better!”
            </span>
            <p className="haDescription" id="haResearchDescription">
            During my tenure with HA Go project, I have honed my design skills by seeking out constructive feedback from senior designer through formal design reviews and presentations. Presenting my designs during review sessions has been an invaluable experience, allowing me to hone my communication skills and develop the ability to lead open and insightful conversations. Moreover, my design lead have taught me the importance of knowing when to stand firm on stakeholder feedback, enabling me to elevate the overall quality of my work. Maintaining open lines of communication with my team and proactively seeking clarifications has helped me balance pressing deadlines and ensure that progress is never impeded.
            </p>
            </div>
    </div>

    <div className="actionProject">
    <Link to="/motic" className="nav-link" >
          <LastBtn />
          </Link>
          <Link to="/wings" className="nav-link" >
          <NextBtn />
          </Link>
          </div>
        </section>
          
    )
}

export default HA