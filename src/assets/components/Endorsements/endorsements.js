import React from "react";
import './endorsements.css';
import LearnBtn from "../LearnBtn/learnBtn.js";
import peter from "../../images/peter.png";
import zoe from "../../images/zoe.png";
import ashely from '../../images/ashely.png';
import micky from  '../../images/micky.png';
import pdf from '../../pdf/Reference-Tse Melody-201230.docx.pdf';
import pdf2 from '../../pdf/Reference-Tse Melody-20230620.pdf';

const Endorsements = () => {
    return (
    <div className="endorsements">
    <div className="group-wrapper">
    <div className="group">
    <div className="frame-2">
    <div className="frame-3">
    <div className="frame-4">
    <img className="mask-group" alt="Mask group" src={peter}/>
    <div className="frame-5">
    <div className="text-wrapper">PETER BENZ <span role="img" aria-label="HK">🇭🇰</span></div>
    <span className="text-wrapper-2">President of Bauhaus-University Weimar</span>
    </div>
    </div>
    <p className="p">
    “I am writing in support of Ms. Tse Yuen-Ting, Melody, who was a student in the BA (Hons) in Visual Arts
    programme of the Academy of Visual Arts, HKBU from September 2017 to June 2019. During this time, Ms.
    Tse completed one studio course in Experience Design under my supervision as well as our Year 4 Research
    Practice course. As the Programme Director for the BA programme I had additional opportunities to
    monitor her progress across the years and therefore believe to know her well academically, creatively,
    and personally.”
    </p>
    <a href = {pdf} ><LearnBtn /></a>
    </div>
    <div className="frame-3">
    <div className="frame-4">
    <img className="mask-group" alt="Mask group" src={zoe} />
    <div className="frame-5">
    <div className="text-wrapper">ZOE AU <span role="img" aria-label="HK">🇭🇰</span></div>
    <p className="text-wrapper-3">Graphic Designer of Edu-Science (HK) Limited</p>
    </div>
    </div>
    <p className="p">
    “I worked with Melody when I was a video designer in PCCW Solutions, where she led a small group to
    produce a number of video clips under a tight schedule. Have been working under her supervision, I was
    impressed by Melody’s leadership skills, she delivered clear instructions to us and ensured the
    operation went smooth between different departments. Also, she was reliable and trustworthy, I could
    always look to Melody for guidance if I encountered any problem. Furthermore, her warm personality made
    the working environment more comforting.”
    </p>
    <a href="https://www.linkedin.com/in/melody-t-7b1b02135/"><LearnBtn /></a>
    </div>
    <div className="frame-3">
    <div className="frame-4">
    <img className="mask-group" alt="Mask group" src={ashely} />
    <div className="frame-5">
    <div className="text-wrapper">ASHELY LAU <span role="img" aria-label="GB">🇬🇧</span></div>
    <p className="text-wrapper-4">
    Scrum Master of Automated Systems (HK) Limited
    </p>
    </div>
    </div>
    <p className="p">
    “During her time as a UI/UX designer in Automated Systems (HK) Limited, Melody&#39;s contributions to
    our team were highly valuable. Her design skills are impressive, and she has a keen eye for detail. She
    worked on various projects, including web and mobile applications, where her designs helped our clients
    to achieve their desired business objectives. Melody consistently demonstrated a deep understanding of
    project requirements and, took great care to ensure that her design choices supported the clients&#39;
    goals.”
    </p>
    <a href = {pdf2} ><LearnBtn /></a>
    </div>
    <div className="frame-3">
    <div className="frame-4">
    <img className="mask-group" alt="Mask group" src={micky} />
    <div className="frame-5">
    <div className="text-wrapper">MICKY LUI <span role="img" aria-label="HK">🇭🇰</span></div>
    <p className="text-wrapper-4">Developer of Automated Systems (HK) Limited</p>
    </div>
    </div>
    <p className="p">
    “As a frontend developer who has worked closely with Melody, I can attest to her ability to clearly
    communicate design concepts and consider the limitations of development during the design process. With
    her drive and unwavering dedication, I have no doubt that Melody will undoubtedly be able to take on
    even more significant responsibilities and emerge as an inspiring leader in her team. Her potential is
    limitless, and I highly recommend her as an exceptional candidate for any UI/UX designer position.”
    </p>
    <a href="https://www.linkedin.com/in/melody-t-7b1b02135/"><LearnBtn /></a>
    </div>
    </div>
    <div className="group-2">
    <div className="text-wrapper-5">Endorsements</div>
    <p className="text-wrapper-6">What people say about working with me.</p>
    </div>
    </div>
    </div>
    </div>
    );
    };

    export default Endorsements
    