import React from "react";
import './seal.css';
import LastBtn from "../../components/LastBtn/lastBtn";
import NextBtn from "../../components/NextBtn/nextBtn.js";
import sealConceptImg from "../../images/seal concept.png";
import sealWork from "../../images/seal work.png";
import sealWork1 from "../../images/seal work1.png";
import sealWork2 from "../../images/seal work2.png";
import sealWork3 from "../../images/seal work3.png";
import sealWork4 from "../../images/seal work4.png";
import sealWork5 from "../../images/seal work5.png";
const Seal = () => {
    return(
        <section id="seal">

           <div className="overlap-group-wrapper">
           <div className="overlap-group">
</div>
</div>
<div className="sealIntro">
    <span className="introTitle">
        Seal Engraving
    </span>
    <p className="introDescription">
    Mastering the art of seal engraving requires a lifelong commitment to learning the nuanced variations and expression of Chinese characters within the calligraphic style.
    </p>
</div>
<div className="sealConcept">
<img src={sealConceptImg} alt="sealConceptImg" className="sealConceptImg" />
<div className="conceptContainer">
<span className="conceptTitle">Concept</span>
<p className="conceptDescription">The art of seal engraving is a cornerstone of Chinese fine arts. The seal was originally used as a signature or sign of authority, but it came to be used by all social classes and in much of Asia. 
<br />
<br />
The design is first sketched on paper, and then engraved on stone, in reverse, with a knife. In addition to mastery of traditional calligraphy, the art of engraving requires a high degree of virtuosity, since the artist works on a tiny surface area where every curve, every thickness of line counts. The very diverse motifs are the fruit of the artist’s imagination and culture. </p>
</div>
</div>
<div className="sealWork">
    <div className="sealWorkContainer">
    <span className="sealWorkTitle">
    Remember National Humiliation
    </span>
    <p className="sealWorkDescription">
    The following artwork in question reflects the expression of students in Hong Kong and Mainland China during the May Fourth Movement. The theme of this series revolves around patriotism and defiance towards the Japanese occupation. The eight stone seal engravings feature phrases that were altered to avoid censorship, with "enemy's products" replacing "Japanese products" due to government restrictions. Additionally, four of the pictorial seals showcase floral patterns and images of seafood, such as abalone and squid, which were commonly imported from Japan at the time. These seals convey the message of boycotting Japanese products and reflect the anti-Japanese sentiment prevalent during this period.
    </p>
    </div>
    <div className="sealImgContainer">
    <img src={sealWork} alt="sealWork" className="sealWork" />
        <div className="sealImgList">
<div className="sealImgRow">
<img src={sealWork1} alt="sealWork1" className="sealWorkItem" />
<img src={sealWork2} alt="sealWork2" className="sealWorkItem" />
</div>
<div className="sealImgRow">
<img src={sealWork3} alt="sealWork3" className="sealWorkItem" />
<img src={sealWork4} alt="sealWork4" className="sealWorkItem" />
</div>
<div className="sealImgRow">
<img src={sealWork5} alt="sealWork5" className="sealWorkItem" />
</div>
        </div>
    </div>
</div>
        <div className="actionProject">
     <LastBtn />
     <NextBtn />
     </div>
     </section>
    )
}

export default Seal