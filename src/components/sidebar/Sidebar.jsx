import React, { useState, useEffect } from 'react'
import {delay, motion, spring} from "framer-motion"
import "./Sidebar.scss"
import ToggleButtons from './ToggleButtons'
import Links from './Links'

export default function Sidebar() {
  const [open, setOpen]= useState(false);
  const variants = {
    open: {
      clipPath : "circle(1200px at 150px 50px)",
      transition :{
        type: "spring",
        stiffness: 20,
      } 
    },
    closed: {
      clipPath : "circle(20px at 150px 50px)",
      transition: {
        type: "spring",
        stiffness: 8000,
        damping: 400
      } 
    }
  }
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      // Always show the button if the screen width is less than or equal to 700px
      if (window.innerWidth <= 699) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add resize event listener
    window.addEventListener('resize' ,handleResize);

    // Call the function initially to set the correct button state
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      if (window.scrollY > navbarHeight || window.innerWidth < 700) {
        console.log(1);
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      {showButton && (<motion.div className="sidebar"  
      animate = {open ? "open" : "closed"} 
    >
      <motion.div className='bg' variants={variants}>
            <Links />
        </motion.div>
        <ToggleButtons setOpen = {setOpen}/>
    </motion.div>)}
    </div>
  )
}
