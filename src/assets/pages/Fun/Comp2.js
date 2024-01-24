import React from "react";
import plantShop from "../../images/Plant Shop.png";
import plantShopColor from "../../images/Plant Shop Color.png";
import plantShopIcon from "../../images/Plant Shop Icon.png";
import plantShopUI from "../../images/Plant Shop UI.png";
import petAdoption from "../../images/Pet Adoption App.png"
import petAdoptionColor from "../../images/Pet Adoption App Color.png";
import petAdoptionIcon from "../../images/Pet Adoption App Icon.png";
import petAdoptionUI from "../../images/Pet Apdoption App UI.png";
const Comp2 = () => {
    return (
        <section id="comp2">
        <div>
        <div className ="cardContainer">
            <div className ="cardIemTitle">UI Style</div>
            {/* <div className ="cacheTagContainer">
                <div className ="cacheTag">Plant Shop App</div>
                <div className ="cacheTag">Pet Adoption App</div>
            </div> */}
            <div className ="itemContainer">
                <div className="itemTitle">Plant Shop App</div>
                <div className="itemContent">
                I recently discovered that Hong Kong does not have an online marketplace specifically dedicated to selling plants. In response to this gap in the market, I have created a concept for brainstorming purposes. Allow me to present an idea for an iOS app that offers an enjoyable plant shopping experience.
                </div>
                <div className="cardImgContainer">
                <img className="cardImg" alt="Mask group" src={plantShop} />
                </div>
                <div className="itemTitle">Color</div>
                <div className="itemContent">
                Color plays a crucial role in our visual communication with users. In this case, we use green as the primary color along with complementary tones to create a refreshing and soothing atmosphere. This color scheme helps users readily identify and connect with plant colors on our platform, resulting in a visually pleasing and comfortable experience for them.
                </div>
                <div className="cardImgContainer
cardImgContainer">
                <img className="cardImg" alt="Mask group" src={plantShopColor} />
                </div>
                <div className="itemTitle">Icon Style</div>
                {/* <div className="itemContent">
                During my time at Motic Hong Kong Limited, I came up with the idea of utilizing a set of microscope illustrations to develop a motion graphic for showcasing professional branding and promoting our brand effectively.
                </div> */}
                <div className="cardImgContainer
cardImgContainer">
                <img className="cardImg" alt="Mask group" src={plantShopIcon} />
                </div>
                <div className="itemTitle">Final Design</div>
                <div className="itemContent">
                </div>
                <div className="cardImgContainer
cardImgContainer">
                <img className="cardImg" alt="Mask group" src={plantShopUI} />
                </div>
                <hr></hr>

                <div className="itemTitle">Pet Adoption App</div>
                <div className="itemContent">
                Hey there! Looking for a furry or scaly friend to adopt? Look no further than my awesome UI practice case app! It's designed specifically to make pet adoption a breeze and give you a fantastic user experience. Whether you're interested in dogs, cats, or any other adorable creatures, we've got you covered. So come on in and let's find you the perfect companion!
                </div>
                <div className="cardImgContainer">
                <img className="cardImg" alt="Mask group" src={petAdoption} />
                </div>
                <div className="itemTitle">Color</div>
                <div className="itemContent">
                Color is key in how we communicate visually with users. In this case, we've used pink as the main color and combined it with similar colors. Pink is often associated with happiness and a fun atmosphere. It adds a delightful visual touch and brings joy to our users.
                </div>
                <div className="cardImgContainer
cardImgContainer">
                <img className="cardImg" alt="Mask group" src={petAdoptionColor} />
                </div>
                <div className="itemTitle">Icon Style</div>
                {/* <div className="itemContent">
                During my time at Motic Hong Kong Limited, I came up with the idea of utilizing a set of microscope illustrations to develop a motion graphic for showcasing professional branding and promoting our brand effectively.
                </div> */}
                <div className="cardImgContainer
cardImgContainer">
                <img className="cardImg" alt="Mask group" src={petAdoptionIcon} />
                </div>
                <div className="itemTitle">Final Design</div>
                <div className="itemContent">
                </div>
                <div className="cardImgContainer
cardImgContainer">
                <img className="petCardImg" alt="Mask group" src={petAdoptionUI} />
                </div>
            </div>
        </div>
    </div>
 </section>
    )
}

export default Comp2