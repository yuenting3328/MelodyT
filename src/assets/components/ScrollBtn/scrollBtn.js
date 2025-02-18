import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import { Button } from './style';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button style={{display: visible ? 'inline' : 'none'}} >
     <IoIosArrowUp onClick={scrollToTop} size={42} style={{padding: "2px 3px", display:"flex"}}
     />
    </Button>

  );
}
  
export default ScrollButton;