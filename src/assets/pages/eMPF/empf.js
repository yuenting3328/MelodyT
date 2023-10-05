import React from "react";
import "./empf.css";
import empfGoal from "../../images/empf goal.png";
import empfDesign from "../../images/empf design.png";
import empfUIImg from "../../images/empf wireframe.gif";
import empfDesignSystem from "../../images/empf styleguide.png";
import LearnBtn from "../../components/LearnBtn/learnBtn.js";
import empfDevelopment from "../../images/empf development.gif";
import empfPrototype from "../../images/empf prototype.gif";
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import { Link } from "react-router-dom";
const EMPF = () => {
    return(
        <section id="empf">
             <div className="overlap-group-wrapper">
            <div className="overlap-group">
                </div>
            </div>
            <div className="empfIntro">
                <div className="empfProjectIntro">
                <span className="empfIntroTitle">
                eMPF Platform
                </span>
                <p className="empfIntroDescription">
                The eMPF Platform represents a significant milestone in the evolution of MPF schemes. Its mission is to revolutionize administrative models by standardizing, streamlining, and automating existing processes. This will be the most significant reform of the MPF System since its inception. 
                <br/>
                <br/>
                By leveraging cutting-edge technologies and advanced solutions, the Platform will offer comprehensive MPF scheme administration services to 4.5 million members and 300,000 employers. This will bring about a transformative change to the MPF ecosystem, ushering in a new era of efficiency and effectiveness.
                </p>
                </div>  
                <div className="projectInfo">
                <div className="infoRow">
                    <span className="infoTitle">
                    Role
                    </span>
                    <p className="infoDescription">
                    UI Designer & UI Developer
                    </p>
                </div>
                <div className="infoRow">
            <span className="infoTitle">
            Duration
            </span>
            <p className="infoDescription">
            9 months
            </p>
        </div>
        <div className="infoRow">
            <span className="infoTitle">
            Tools
            </span>
            <p className="infoDescription">
            Adobe XD, MUI library, Github, React
            </p>
        </div>
        <div className="infoRow">
            <span className="infoTitle">
            Team
            </span>
            <p className="infoDescription">
            eMPF Design Team & Tech Team
            </p>
        </div>
        <div className="infoRow">
            <span className="infoTitle">
            Press
            </span>
            <p className="infoDescription">
            <a class="pressLink" href="https://xd.adobe.com/view/0c40d7fd-366b-41c6-63a1-3183ea9c991d-7a71/screen/36045ce1-ec06-42b8-b6a2-affa59d86d4c" > eMPF Prototype </a>
            </p>
        </div>    
        </div>
            </div>

            <div className="empfProjectGoalContainer">
            <div className="empfTextContainer" id="empfGoalTextContaier">
            <span className="empfTitle" id="empfGoalTitle">
            Project Goals
            </span>
            <div className="empfDescriptionContainer">
            <p className="empfDot">•</p>
            <p className="empfGoalDescription" id="empfGoalDescription">
            Enhance the efficiency, public users can use one platform to manage their MPF accounts across different MPF schemes anytime and anywhere through online and mobile applications.
            </p>
            </div>
            <div className="empfDescriptionContainer">
            <p className="empfDot">•</p>
            <p className="empfGoalDescription" id="empfGoalDescription">
            In order to lower the overall administration expenses, public users are currently required to cover the administration fees for several administration platforms. This entails payments to 14 Trustees as well as 12 distinct scheme administration platforms.
            </p>
            </div>
            <div className="empfDescriptionContainer">
            <p className="empfDot">•</p>
            <p className="empfGoalDescription" id="empfGoalDescription">
            Improve the user experience by providing a standardised, streamlined, and automated one-stop platform for creating a user interface that caters to three parties: the trustee, employer, and employee. This platform will incorporate tailored features for each of them, ensuring an optimised experience across the board.
            </p>
            </div>
            </div>
            <div className="imgContainer" id="empfGoalImgContainer">
            <img src={empfGoal} alt="empfGoalImg" className="empfGoalImg" />
            </div>
            </div>

            <div className="empfDesignContainer">
            <div className="empfTextContainer" id="empfDesignTextContaier">
            <span className="empfTitle" id="empfDesignTitle">
            Design Process & Deliverables
            </span>
            <p className="empfDescription" id="empfDesignDescription">
            Since our project is still an early-stage start-up,  our design & development are shared under the Adobe XD and Microsoft Team.
            </p>
            </div>  
            <div className="empfDesignImgContainer" id="empfDesignmgContainer">
            <img src={empfDesign} alt="empfDesignImg" className="empfDesignImg" />
            </div>
            </div>

            <div className="empfUI">
            <div className="empfUIImgContainer">
            <img src={empfUIImg} alt="empfUIImg" className="empfUIImg" />
            </div>
            <div className="empfUIContainer">
            <span className="empfTitle">User Interface</span>
            <p className="empfUIDescription">My design team and I work in collaboration with both users and business analysts to define user flows. We then create wireframes which serve as the initial blueprint for the design. 
            <br />
            <br />
            From there, we experiment with different visual styles, all while utilizing a style guide as the foundation, to ultimately arrive at a fully responsive and flawless end interface.</p>
            </div>
            </div>

            <div className="empfDesignSystemContainer">
            <div className="empfTextContainer" id="empfDesignSystemTextContaier">
            <span className="empfTitle" id="empfDesignSystemTitle">
            Designed with system
            </span>
            <p className="empfDescription" id="empfDesignSystemDescription">
            Defining all the basic elements in advance helped to design fast and consistent throughout the project. Style changes later on were easy to orchestrate.
            </p>
            <div className="empfDesignSystemBtnContainer">
            <a
            className="link"
            href="https://xd.adobe.com/view/bba2fc9c-0f04-4122-9f79-ba3615656ec2-eef1/"
            rel="noopener noreferrer"
            target="_blank"
            > <LearnBtn />
            </a>
            </div>
            </div>
            <div className="imgContainer" id="empfDesignSystemImgContainer">
            <img src={empfDesignSystem} alt="empfDesignSystemImg" className="empfDesignSystemImg" />
            </div>
            </div>

            <div className="empfDevelopmentContainer">
            <div className="empfTextContainer" id="empfDevelopmentTextContaier">
            <span className="empfTitle" id="empfDevelopmentTitle">
            Front-end Development
            </span>
            <p className="empfDescription" id="empfDevelopmentDescription">
            Our team excels at transforming designs into seamless websites. We adhere to the best code practices in React to create a strong foundation for the project. With a focus on modularity, we leverage both the MUI library and Tailwind CSS to enhance our already consistent coding process. To ensure design and development consistency, we build customized theme systems for the library.
            </p>
            </div>
            <div className="empfDevelopmentImgContainer" id="empfDevelopmentImgContainer">
            <img src={empfDevelopment} alt="empfDevelopmentImg" className="empfDevelopmentImg" />
            </div>
            </div>

            <div className="empfPrototypeContainer">
            <div className="empfTextContainer" id="empfPrototypeTextContaier">
            <span className="empfTitle" id="empfPrototypeTitle">
            Current State
            </span>
            <p className="empfDescription" id="empfPrototypeDescription">
            The platform is currently undergoing development, with users reviewing prototypes and offering constructive feedback to help fine-tune its functionality and elevate the user experience.
            </p>
            <div className="empfPrototypeBtnContainer">
            <a
            className="link"
            href="https://xd.adobe.com/view/0c40d7fd-366b-41c6-63a1-3183ea9c991d-7a71/screen/36045ce1-ec06-42b8-b6a2-affa59d86d4c/"
            rel="noopener noreferrer"
            target="_blank"
            > <LearnBtn />
            </a>
            </div>
            </div>
            <div className="empfPrototypeImgContainer" id="empfPrototypeImgContainer">
            <img src={empfPrototype} alt="empfPrototypeImg" className="empfPrototypeImg" />
            </div>
            </div>

            <div className="actionProject">
            <Link to="/muji" className="nav-link" >
            <LastBtn />
            </Link>
            <Link to="/motic" className="nav-link" >
            <NextBtn />
            </Link>
            </div>
            
        </section>
    )
}
export default EMPF