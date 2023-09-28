import React from "react";
import'./navbar.css';
import './index.js';
import logo from '../../images/Logo.png';
import { Link } from "react-router-dom";



const NavBar = () => {
	return(
		<header>
		<div className="logo">
			<Link to="/" className="header_logo">
			<img src={logo} alt=""/>
			</Link>			
		</div>
		<nav className="nav" id="nav-menu">
		<ion-icon name="close" classname="header_close" id="close-menu"></ion-icon>

		<ul className="nav_list">
			<li className="nav_item">
			<Link to="/" className="nav-link" >
                  Work
            </Link> 
			</li>
			<li className="nav_item">
			<Link to="/about" className="nav-link" >
                  About
            </Link> 
			</li>
			<li className="nav_item">
			<Link to="/cache" className="nav-link" >
                  Cache
            </Link> 
			</li>
			<li className="nav_item">
			<a href="yuenting3328@gmail.com" className="nav-link" >
                  Contact
            </a> 
			</li>
		</ul>
		</nav>
		<ion-icon name="menu" className="header_toggle" id="toggle-menu"></ion-icon>
		</header>
		
	)
} 
export default NavBar
// import React, { useState, useEffect } from 'react';
// import "./navbar.css";
// import logo from "../../images/Logo.png";
// import { Link } from 'react-router-dom';
// import { Button } from "../Button/button.js";
// // import { FaTimes, FaBars } from "react-icons/fa";


// function NavBar () {
//     const [click, setClick] = useState(false);

//     const[button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);

//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if(window.innerWidth <=768) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     window.addEventListener('resize', showButton);

//     return (
//         <>
//             <nav className="navbar">
//             <div className="navbar-container">
//             <Link to="/" className="logo-container">
//             <img src={logo} alt="logo" className='navbarLogo'/>
//             </Link>
// 			<div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
//                 <li className="nav-item">
//                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                  Work
//                 </Link> 
//                 </li>
//                 <li className="nav-item">
//                 <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
//                  About
//                 </Link> 
//                 </li>
//                 <li className="nav-item">
//                 <Link to="/cache" className="nav-links" onClick={closeMobileMenu}>
//                  Cache
//                 </Link> 
//                 </li>
//                 <li className="nav-item">
//                 <a href="https://www.linkedin.com/in/melody-t-7b1b02135/" className="nav-links" onClick={closeMobileMenu}>
//                 Let's connect
//                 </a>
//                 </li>
//             </ul>
//             {button && <Button buttonStyle='btn--primary' buttonSize={"btn--large"}>Let's connect</Button>} 
//             </div>
            
//             </nav>
//         </>
//     )
// }

// export default NavBar


//     const NavBar = () => {
//     return (
//         <nav className="navbar">
//             <div class="logo">
//                 <img src={logo} alt="logo" className='navbarLogo'/>
//             </div>
//             <div className="desktopMenuList">
//             <Link to="/" className="menuListItem">
//                 Work
//             </Link>
//             <Link to="/about" className="menuListItem">
//                 About
//                 </Link>
//             <Link to="/cache" className="menuListItem">
//                 Cache
//                 </Link>
//                 <a id="btn" href="https://www.linkedin.com/in/melody-t-7b1b02135/">
//             <button className="desktopMenuBtn">
//              Let's Connect
//             </button>
//             </a>
//             </div>
//         </nav>
//     )
// }

// export default NavBar