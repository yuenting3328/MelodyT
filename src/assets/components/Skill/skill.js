import React from "react";
import './skill.css';
import figma from '../../images/Adobe_Illustrator_CC_icon 1.png';
import axd from '../../images/Adobe_Illustrator_CC_icon 2.png';
import aai from '../../images/Adobe_Illustrator_CC_icon 3.png';
import aps from '../../images/Adobe_Illustrator_CC_icon 4.png';
import aid from '../../images/Adobe_Illustrator_CC_icon 5.png';
import apr from '../../images/Adobe_Illustrator_CC_icon 6.png';
import fcp from '../../images/Adobe_Illustrator_CC_icon 7.png';
import react from '../../images/Adobe_Illustrator_CC_icon 8.png';
import mui from '../../images/Adobe_Illustrator_CC_icon 9.png';
import ant from '../../images/Adobe_Illustrator_CC_icon 10.png';
import git from '../../images/Adobe_Illustrator_CC_icon 11.png';
import sketch from '../../images/Adobe_Illustrator_CC_icon 12.png';
import webflow from '../../images/Adobe_Illustrator_CC_icon 13.png';
import jira from '../../images/Adobe_Illustrator_CC_icon 14.png';

const Skill = () => {
    return(
        <div className="skill">
<div className="group-wrapper">
<div className="group">
<div className="div">
<div className="frame">
<div className="text-wrapper">Core Skills</div>
</div>
<div className="frame-2">
<div className="frame-3">
<div className="text-wrapper-2">UX DESIGN</div>
<div className="text-wrapper-3">
UX Research
<br />
Storyboard
<br />
Wireframing
<br />
Prototyping
<br />
Usability Testing
</div>
</div>
<div className="frame-3">
<div className="text-wrapper-2">UI DESIGN</div>
<p className="text-wrapper-3">
Visual Design
<br />
Layout Design
<br />
Visual Interface
<br />
Responsive Design
<br />
Design System
</p>
</div>
<div className="frame-3">
<div className="text-wrapper-2">Development</div>
<div className="text-wrapper-3">
HTML
<br />
CSS
<br />
JS
<br />
Frameworks
<br />
Design Library
</div>
</div>
</div>
</div>
<div className="group-2">
<div className="frame-4">
<div className="text-wrapper-4">Toolbox</div>
<p className="these-are-the-tools">
These are the tools that I’ve been working on to streamline my creative process. I’m always
open to learn new methodologies.
</p>
</div>
<div className="frame-5">
<div className="frame-6">
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={figma}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={axd}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={aai}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={aps}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={aid}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={apr}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={fcp}
/>
</div>
<div className="frame-6">
<img className="img" alt="Adobe illustrator CC" src={react} />
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={mui}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={ant}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={git}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={sketch}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={webflow}
/>
<img
className="adobe-illustrator-CC"
alt="Adobe illustrator CC"
src={jira}
/>
</div>
</div>
</div>
</div>
</div>
</div>
    )
}

export default Skill