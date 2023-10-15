import React from "react";
import "./muji.css"
import mujiBackground from "../../images/muji backgound.png";
import mujiOutcome1 from "../../images/muji outcome1.png";
import mujiOutcome2 from "../../images/muji outcome2.png";
import mujiOutcome3 from "../../images/muji outcome3.png";
import mujiOutcome4 from "../../images/muji outcome4.png";
import mujiProductDesign from "../../images/muji product design.png";
import mujiUI1 from "../../images/muji ui1.png";
import mujiUI2 from "../../images/muji ui2.png";
import mujiUI3 from "../../images/muji ui3.png";
import mujiUI4 from "../../images/muji ui4.png";
import mujiUI5 from "../../images/muji ui5.png";
import mujiPrototype1 from "../../images/muji prototype.gif";
// import mujiPrototype2 from "../../images/muji prototype img.png";
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import { Link } from "react-router-dom";
const Muji = () =>{
    return (
        <section id="muji">
                    <div className="overlap-group-wrapper">
           <div className="overlap-group">
            </div>
        </div>
        <div className="mujiIntro">
            <div className="mujiProjectIntro">
            <span className="introTitle">
            Muji Warmtle
            </span>
            <p className="mujiIntroDescription">
            This project is focused on utilizing innovative design concepts to enhance a particular brand. Through research and comprehending the brand's history and message, I aim to suggest a Warmtle that aligns with the Muji's values. 
            <br/>
            <br/>
            Muji is a Japanese retailer which sells a wide variety of household and consumer goods. Muji's design philosophy is minimalist, and it places an emphasis on recycling, reducing production and packaging waste, and a no-logo or "no-brand" policy.
            </p>
            </div>  
            <div className="projectInfo">
            <div className="infoRow">
                <span className="infoTitle">
                Role
                </span>
                <p className="infoDescription">
                Branding & UX/UI Designer 
                </p>
            </div>
            <div className="infoRow">
        <span className="infoTitle">
        Duration
        </span>
        <p className="infoDescription">
        2019, 2020
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Tools
        </span>
        <p className="infoDescription">
        Adobe XD, Fusion 360, Adobe Illutrator, Adobe Premiere Pro, Adobe Photoshop
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Team
        </span>
        <p className="infoDescription">
        Self initiated project
        </p>
    </div>
    <div className="infoRow">
        <span className="infoTitle">
        Press
        </span>
        <p className="infoDescription">
        <a class="pressLink" href="https://xd.adobe.com/view/c8ddef2b-3213-4711-9e00-df467d19515a-9d8e/?fullscreen" > Warmtle App Prototype </a>
        </p>
    </div>    
    </div>
        </div>

        <div className="mujiBackgroundContainer">
        <div className="imgContainer" id="mujiBackgrondImgContainer">
        <img src={mujiBackground} alt="mujiBackgroundImg" className="mujiBackgroundImg" />
    </div>
            <div className="mujiBackgroundTextContainer" id="mujiBackgroundTextContaier">
            <span className="mujiTitle" id="mujiBackgroundTitle">
            Research
            </span>
            <p className="mujiDescription" id="mujiBackgroundDescription">
            I have studied Gmail's design and find their user icon to be quite impressive, as it offers quick access to several key actions, including changing, managing, and adding another account. Additionally, Gmail has incorporated intuitive micro-interactions that guide users through the product in an effortless and intuitive way, making for a more seamless user experience.
            </p>
            </div>
    </div>

    <div className="mujiIdeaContainer">
            <div className="mujiTextContainer" id="mujiideaTextContaier">
            <span className="mujiTitle" id="mujiideaTitle">
            The Idea
            </span>
            <p className="mujiDescription" id="mujiideaDescription">
            Through the study of Muji's design and concept, it becomes evident that the brand not only advocates for simplicity and integration of design in daily life, but also remains grounded in its origins while looking towards the future. While Muji has successfully launched a wide array of daily use products, it has yet to break into the electronic product market. 
            <br/>
            <br/>
            However, with the progress of technology and ever-evolving needs of modern society, electronic products have become an indispensable feature in daily life. Even for something as commonplace as water bottles, human requirements have evolved and are continuously being enhanced.
            </p>
            </div>
    </div>

    <div className="mujiOutcomeContainer">
    <div className="mujiOutcomeImgContainer" id="mujiOutcomeImgContainer">
        <img src={mujiOutcome1} alt="mujiOutcomeImg" className="mujiOutcomeImg" />
    </div>
    <div className="mujiOutcomelImgRow">
    <img src={mujiOutcome2} alt="mujiOutcome1" className="mujiOutcomeItem" />
    <img src={mujiOutcome3} alt="mujiOutcome2" className="mujiOutcomeItem" />
    </div>
    <div className="mujiOutcomeSideContainer" id="mujiOutcomeContainer">
    <div className="mujiOutcomeSideImgContainer" id="mujiOutcomeSideImgContainer">
    <img src={mujiOutcome4} alt="mujiOutcomeImg4" className="mujiOutcomeImg4" />
    </div>
    <div className="mujiOutcomeSideTextContainer">
    <span className="title" id="mujiOutcomeTitle">
            The Outcome
            </span>
            <p className="mujiOutcomeDescription" id="mujiOutcomeDescription">
            Therefore, I created Warmtle, Warmtle is the perfect solution to keep your beverages at the desired temperature all day long. Our innovative design ensures your drink stays hot or cold, no matter where life takes you. Whether you're in a rush to work or on a long road trip with the family, Warmtle accommodates every lifestyle and preference. Say goodbye to lukewarm drinks and hello to the perfect temperature with Warmtle.
            </p>
    </div>
    </div>
    </div>
{/* 
    <div className="mujiProductDesignContainer">
            <div className="mujiTextContainer" id="mujiProductDesignTextContaier">
            <span className="mujiTitle" id="mujiProductDesignTitle">
            Product Design
            </span>
            <p className="mujiDescription" id="mujiProductDesignDescription">
            The innovative electronic keep warm bottle that can be controlled effortlessly using the Muji Warmtle App or simply by adjusting the temperature through its intuitive sensor template on the LED screen. The product boasts a sleek and functional design, derived from extensive research and interviews with public to ensure optimal performance and aesthetic appeal. By combining electronic components with MUJI's well-regarded water bottle design, created a versatile and efficient keep warm bottle that meets the needs of modern consumers.
            </p>
            </div>
        <div className="imgContainer" id="mujiProductDesignImgContainer">
        <img src={mujiProductDesign} alt="mujiProductDesignImg" className="mujiProductDesignImg" />
    </div>
    </div> */}

    <div className="mujiProductDesignContainer">
            <div className="mujiTextContainer" id="mujiProductDesignTextContaier">
            <span className="mujiTitle" id="mujiProductDesignTitle">
            Product Design
            </span>
            <p className="mujiDescription" id="mujiProductDesignDescription">
            The innovative electronic keep warm bottle that can be controlled effortlessly using the Muji Warmtle App or simply by adjusting the temperature through its intuitive sensor template on the LED screen. The product boasts a sleek and functional design, derived from extensive research and interviews with public to ensure optimal performance and aesthetic appeal. By combining electronic components with MUJI's well-regarded water bottle design, created a versatile and efficient keep warm bottle that meets the needs of modern consumers.
            </p>
            </div>
        <div className="imgContainer" id="mujiProductDesignImgContainer">
        <img src={mujiProductDesign} alt="mujiProductDesignImg" className="mujiProductDesignImg" />
    </div>
    </div>

    <div className="mujiUIContainer">
            <div className="mujiTextContainer" id="mujiUITextContaier">
            <span className="mujiTitle" id="mujiUITitle">
            User Interface Design
            </span>
            <p className="mujiDescription" id="mujiUIDescription">
            Connect the Warmtle device to the app via Bluetooth to effortlessly track your water and caffeine intake. Simply use the device to drink your water or coffee, and the data will be automatically recorded in the app. With five exciting features, users can easily stay on top of their hydration goals and enjoy the full benefits of this innovative app.
            </p>
            </div>
        <div className="mujiUIImglist" id="mujiUIImglist">
        <img src={mujiUI1} alt="mujiUIImg1" className="mujiUIImg" />
        <img src={mujiUI2} alt="mujiUIImg2" className="mujiUIImg" />
        <img src={mujiUI3} alt="mujiUIImg3" className="mujiUIImg" />
        <img src={mujiUI4} alt="mujiUIImg4" className="mujiUIImg" />
        <img src={mujiUI5} alt="mujiUIImg5" className="mujiUIImg" />
    </div>
    </div>



    <div className="mujiPrototypeContainer">
            <div className="mujiTextContainer" id="mujiPrototypeTextContaier">
            <span className="mujiTitle" id="mujiPrototypeTitle">
            Prototype
            </span>
            <p className="mujiDescription" id="mujiPrototypeDescription">
            The below prototypes is a crucial step in ensuring that my product operates as intended and effectively resolves your users' challenges. Furthermore, it provides me with valuable insights to refine my idea while it is still malleable and straightforward to implement modifications.
            </p>
            </div>
        <div className="mujiPrototypeImglist" id="mujiPrototypeImglist">
            <div className="mujiPrototypeGifContainer">
        <img src={mujiPrototype1} alt="mujiPrototypeImg1" className="mujiPrototypeGif" />
        </div>
        <div className="mujiPrototypeVideoContainer">
        <iframe src="https://www.youtube.com/embed/q-BQCu92v50?si=Rl8EBMHtvnhdwGZu" title="mujiVideo" className="mujiVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* <img src={mujiPrototype2} alt="mujiPrototypeImg2" className="mujiPrototypeImg" /> */}
    </div>
    </div>

    <div className="actionProject">
    <Link to="/wings" className="nav-link" >
          <LastBtn />
          </Link>
          <Link to="/empf" className="nav-link" >
          <NextBtn />
          </Link>
          </div>
        </section>

    )
}
export default Muji