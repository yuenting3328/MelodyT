import React from "react";
import './Card.css';
import canadaChar from '../../images/canada character.gif';
const Comp1 = () => {
    return (
        <section id="comp1">
        <div>
            <div className ="cardContainer">
                <div className ="cardIemTitle">Motion Graphics</div>
                <div className ="cacheTagContainer">
                    <div className ="cacheTag">Canada Character</div>
                    <div className ="cacheTag">Rabbit</div>
                    <div className ="cacheTag">Assemble Microscope</div>
                    <div className ="cacheTag">BA210RED Promotional Video</div>
                    <div className ="cacheTag">Sustainable Art Exhibition</div>
                </div>
                <div className ="itemContainer">
                    <div className="itemTitle">Canada Character</div>
                    <div className="itemContent">
                    Introducing our friendly Canadian character! Meet our adorable beaver, proudly representing Canada and enhancing your website experience. Did you know that the beaver holds official status as a symbol of Canadian sovereignty? It received this recognition through the National Symbol of Canada Act, which was passed on March 24, 1975. However, the beaver has long been a cherished part of Canadian identity even before that.
                    </div>
                    <div className="cardImgContainer">
                    <img className="cardImg" alt="Mask group" src={canadaChar} />
                    </div>
                    <hr></hr>
                    <div className="itemTitle">Rabbit</div>
                    <div className="itemContent">
                    I came up with this idea because I am a rabbit owner and I love blending my life with design.
                    </div>
                    <div className="cardImageContainer">
                    <iframe title="rabbit" className="rabbitContainer" src="https://www.youtube.com/embed/nptzzhcTEQM?si=W1PY7kye3rqQ58I8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <hr></hr>
                    <div className="itemTitle">Assemble Microscope</div>
                    <div className="itemContent">
                    During my time at Motic Hong Kong Limited, I came up with the idea of utilizing a set of microscope illustrations to develop a motion graphic for showcasing professional branding and promoting our brand effectively.
                    </div>
                    <div className="cardImageContainer">
                    <iframe className="rabbitContainer" src="https://www.youtube.com/embed/WlhxTGzl7YQ?si=hkt93hET2g4fnYW5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <hr></hr>
                    <div className="itemTitle">BA210RED Promotional Video</div>
                    <div className="itemContent">
                    This video presentation aims to introduce our latest product, the BA210RED, and inform our valued customers about this innovative product series. We are delighted to showcase the several professional function upgrades that this new product offers. By watching this video, customers will gain a comprehensive understanding of the BA210RED and its remarkable features, which will undoubtedly enhance their experience and satisfaction with our brand.
                    </div>
                    <div className="cardImageContainer">
                    <iframe className="rabbitContainer" src="https://www.youtube.com/embed/dHF-MsVkdg4?si=bTRmZaJgSwUbDd_m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <hr></hr>
                    <div className="itemTitle">Sustainable Art Exhibition</div>
                    <div className="itemContent">
                    The following video has been created as a means to showcase the staggering amount of wood waste that is discarded on a daily basis in Hong Kong. In order to address this issue, we have taken the initiative to collect nearly a ton of discarded wooden pallets and repurpose them into captivating artworks that serve as both a creative and illustrative representation of this problem. By ingeniously utilizing these reclaimed materials, we have successfully established an exhibition that not only redefines the concept of wood construction, but also serves as a visually striking and thought-provoking installation.
                    </div>
                    <div className="cardImageContainer">
                    <iframe className="rabbitContainer" src="https://www.youtube.com/embed/i9PL27uP3w8?si=SGL0MjhhqqKBRmkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        </section>

    )
}

export default Comp1