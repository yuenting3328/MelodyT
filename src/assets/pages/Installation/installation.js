import React from "react";
import "./installation.css";
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import ReseachPhotos from "../../images/research photos.png";
import installationConceptImg from "../../images/installation concept.png";
import installationWork from '../../images/installation outcome.png';
import installationWork1 from "../../images/installation outcome side 1.png";
import installationWork2 from "../../images/installation outcome side 2.png";
const Installation = () => {
    return (
        <section id="installation">
        <div className="overlap-group-wrapper">
        <div className="overlap-group">
</div>
</div>
<div className="installationIntro">
 <span className="introTitle">
     Installation
 </span>
 <p className="introDescription">
 To craft an immersive encounter, I consistently engage my audience by designing dynamic sculptures and installations. This approach allows me to stimulate their perceptions and provoke contemplation on the interplay between technology and art.
 </p>
</div>
<div className="installationResearch">
<img src={ReseachPhotos} alt="researchPhotos" className="researchPhotos" />
    <div className="installationResearchContainer">
        <span className="installationResarchTitle">
        Research
        </span>
        <p className="installationResearchDescription">
        My attention was recently drawn to the concerning phenomenon known as 'Phubbing', whereby individuals focus solely on their mobile devices, disregarding both people and their environment. To investigate this issue, I have employed a unique approach involving photography as a means of capturing and documenting communication habits within the MTR. By utilizing a quantitative research method, this study aims to provide an objective and in-depth analysis of Phubbing. The study is divided into several segments, with particular attention paid to each component in order to gain a comprehensive understanding of the phenomenon. This research method seeks to identify patterns in human behavior across a variety of settings, thus enabling a fuller analysis and interpretation of the results.
        </p>
    </div>
</div>
<div className="installationConcept">
<div className="conceptImg">
<img src={installationConceptImg} alt="installationConceptImg" className="installationConceptImg" />
</div>
<div className="conceptContainer">
<span className="conceptTitle">Concept</span>
<p className="conceptDescription">My artwork is based on a research proposal which focuses on using photographs as the main material. I have utilized these photos to create a hazy and detached mood by removing certain parts of the images through Photoshop. This technique helps to highlight the growing social issue of ‘phubbing’ - where individuals become so consumed by their mobile phones that they hardly notice people around them. Phubbers and non-phubbers may be physically close but are emotionally in two separate worlds. Through this artwork, I aim to shed light on the communication gap that technology is creating among people in the contemporary world. 
</p>
</div>
</div>
    <div className="installationImgContainer">
    <img src={installationWork} alt="installationWork" className="installationWork" />
<div className="installationImgRow">
<img src={installationWork1} alt="installationWork1" className="installationWorkItem" />
<img src={installationWork2} alt="installationWork2" className="installationWorkItem" />
</div>
</div>
     <div className="actionProject">
  <LastBtn />
  <NextBtn />
  </div>
  </section>

    )
}

export default Installation