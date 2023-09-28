import React from "react";
import './experience.css';
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import experienceConceptImg from "../../images/experience concept.png";
import experienceDesignImg from "../../images/experience design.png";
import experienceVideo from "../../video/Music Bracelets.mp4";

const Experience = () => {
    return(
        <section id="experience">

           <div className="overlap-group-wrapper">
           <div className="overlap-group">
</div>
</div>
<div className="experienceIntro">
    <span className="introTitle">
        Experience 
    </span>
    <p className="introDescription">
    Crafting engaging experiences by using graphics, music, space, foods, drinks, smells, costumes, and technology is my passion. My ultimate goal is to create an immersive, emotional, joyful, memorable, and enchanting experience for my audience. I take pleasure in exploring innovative methods to establish a profound human connection that fuels my creativity.
    </p>
</div>
<div className="experienceConcept">
<img src={experienceConceptImg} alt="experienceConceptImg" className="experienceConceptImg" />
<div className="conceptContainer">
<span className="conceptTitle">Concept</span>
<p className="conceptDescription">This is the innovative "epidermal wearable interactive devices" are multifunctional electronic accessories designed to fulfill a variety of purposes. They can operate as either passive or active on-skin screens, along with possessing capacitive and resistive sensors which can be used for manipulating different devices. Additionally, they feature strain gauges that are capable of detecting posture inconsistencies.</p>
</div>
</div>
<div className="experienceDesign">
    <div className="experienceDesignContainer">
    <span className="experienceDesignTitle">
    Design
    </span>
    <p className="experienceDesignDescription">
    Incorporating multiple metals into these designs not only captures the attention of onlookers, but also enables the integration of various electronic components, resulting in a visually stunning piece of wearable art. By incorporating sensors, these bracelets can now offer a heightened level of functionality. For example, in certain instances, users can attach an Arduino device to their clothing which is programmed using Max7, allowing the bracelets to emit a unique range of sounds.
    </p>
    </div>
    <img src={experienceDesignImg} alt="experienceDesignImg" className="experienceDesignImg" />
    </div>
    <div className="experienceOutcome">
    <div className="videoContainer">
    <video src={experienceVideo} className="experienceVideo" controls autoplay />
    </div>
<div className="outcomeContainer">
<span className="outcomeTitle">Outcome</span>
<p className="outcomeDescription">Introducing music bracelets – a revolutionary wearable technology created by me and my team! These innovative bracelets are designed to be both functional and aesthetically pleasing. While they may look like ordinary bracelets, they offer so much more. Unlike traditional ones, music bracelets can play your favorite songs, take calls, and even monitor your fitness goals. With music bracelets, you'll never have to sacrifice style for functionality. Say goodbye to clunky headphones and hello to sleek, stylish music bracelets that seamlessly integrate into your everyday activities.</p>
</div>
</div>
<div className="actionProject">
     <LastBtn />
     <NextBtn />
     </div>
     </section>
    )
}

export default Experience