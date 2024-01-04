import React from "react";
import puffy from "../../images/puffy.png";
import puffyOriginal from "../../images/puffy original design.png";
import puffyStyle from "../../images/Puffy Style Guide.png";
import puffyWireframe from "../../images/Puffy Wireframe.png";
import puffyUI from "../../images/Puffy UI.png";
import bupa from "../../images/bupa hong kong.png";
import bupaColor from "../../images/Bupa Hong Kong  Color.png";
import bupaIcon from "../../images/Bupa Hong Kong Icon.png";
import bupaUI from "../../images/Bupa Web UI.png";

const Comp3 = () => {
    return (
        <section id="comp3">
        <div>
        <div className ="cardContainer">
            <div className ="cardIemTitle">Revamp Case</div>
            <div className ="cacheTagContainer">
                <div className ="cacheTag">Puffy Website</div>
                <div className ="cacheTag">Bupa Hong Kong Website</div>
            </div>
            <div className ="itemContainer">
                <div className="itemTitle">Puffy Website</div>
                <div className="itemContent">
                I have created a visually captivating UI design that embodies Puffy as the epitome of luxury. With a primary focus on highlighting its premium quality and opulent allure, the design showcases Puffy as a prestigious brand. By aiming to elevate the brand to a luxurious level, our objective is to captivate the attention of high-class customers and align with the prevailing trends in the American market.
                </div>
                <div className="cardImgContainer">
                <img className="cardImg" alt="Mask group" src={puffy} />
                </div>
                <div className="itemTitle">Original Design</div>
                <div className="itemContent">
                </div>
                <div className="cardImageContainer">
                <img className="cardImg" alt="Mask group" src={puffyOriginal} />
                </div>
                <div className="itemTitle">Style Guide</div>
                <div className="itemContent">
                </div>
                <div className="cardImageContainer">
                <img className="cardImg" alt="Mask group" src={puffyStyle} />
                </div>
                <div className="itemTitle">Wireframe</div>
                <div className="itemContent">
                </div>
                <div className="cardImageContainer">
                <img className="cardImg" alt="Mask group" src={puffyWireframe} />
                </div>
                <div className="itemTitle">Final Design</div>
                <div className="itemContent">
                </div>
                <div className="cardImageContainer">
                <img className="cardImg" alt="Mask group" src={puffyUI} />
                </div>
                <hr></hr>

                <div className="itemTitle">Bupa Hong Kong Website</div>
                <div className="itemContent">
                We aim to enhance the branding and overall user experience of the existing Bupa official website landing page. Our foremost objective is to create a seamless and user-friendly interface that entices visitors to explore the website further and ultimately encourages them to purchase insurance online. By implementing strategic improvements, we strive to facilitate effortless navigation and highlight the benefits of Bupa's insurance offerings, ensuring a positive and engaging experience for users.
                </div>
                <div className="cardImgContainer">
                <img className="cardImg" alt="Mask group" src={bupa} />
                </div>
                <div className="itemTitle">Color</div>
                <div className="itemContent">
                Bupa's pre-established color scheme was diligently adhered to in order to maintain the integrity and identity of the organization. To effectively handle the intricacy of the case, the inclusion of minimalistic icons was seamlessly integrated. By doing so, the overwhelming visual complexity of the elements on smaller screens was significantly diminished.
                </div>
                <div className="cardImageContainer">
                <img className="cardImg" alt="Mask group" src={bupaColor} />
                </div>
                <div className="itemTitle">Icon Style</div>
                {/* <div className="itemContent">
                During my time at Motic Hong Kong Limited, I came up with the idea of utilizing a set of microscope illustrations to develop a motion graphic for showcasing professional branding and promoting our brand effectively.
                </div> */}
                <div className="cardImageContainer">
                <img className="cardImg" alt="Mask group" src={bupaIcon} />
                </div>
                <div className="itemTitle">Final Design</div>
                <div className="itemContent">
                </div>
                <div className="cardImageContainer">
                <img className="petCardImg" alt="Mask group" src={bupaUI} />
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Comp3