import React from "react";
import "./ha.css";
import haGoal from "../../images/HA goal.png";
import haProblem from "../../images/HA problem.png";
import haResearch from "../../images/HA research.png";
import haSolution from "../../images/HA outcome.png";
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
            HA Go is the all-in-one app developed by the Hospital Authority (HA) to bring you a range of comprehensive healthcare management solutions in one convenient location. With a variety of new features and functions, HA Go streamlines patient care with easy-to-use tools that keep you in control of your healthcare journey. Over a million people have chosen HA Go to manage their health with ease, and the app boasts a 3.6-star rating out of 5. Experience the convenience of HA Go today and take charge of your health.
            </p>
            </div>  <div className="projectInfo">
            <div className="infoRow">
                <span className="infoTitle">
                Date
                </span>
                <p className="infoDescription">
                June 2021
                </p>
            </div>
            <div className="infoRow">
        <span className="infoTitle">
        Client
        </span>
        <p className="infoDescription">
        Hospital Authority    
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        My role
        </span>
        <p className="infoDescription">
        UX/UI Designer  
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        What I did?
        </span>
        <p className="infoDescription">
        Research, UX & UI  Design   
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