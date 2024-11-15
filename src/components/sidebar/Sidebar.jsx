import React, { useState, useEffect } from 'react'
import {delay, motion, spring} from "framer-motion"
import "./Sidebar.scss"
import ToggleButtons from './ToggleButtons'
import Links from './Links'

export default function Sidebar() {
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
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      // Always show the button if the screen width is less than or equal to 700px
      if (window.innerWidth <= 749) {
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
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      if (window.scrollY > navbarHeight || window.innerWidth < 751) {
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
        initial={open ? "open" : "closed"}  // Ensure an initial state
        animate={open ? "open" : "closed"} // Animate between open and closed
        variants={{
          open: { opacity: 1 }, // Example values, adjust according to your needs
          closed: { opacity: 1 }
        }}
    >
      <motion.div className='bg' variants={variants}>
            <Links />
        </motion.div>
        <ToggleButtons setOpen = {setOpen}/>
      </motion.div>)}
    </div>
  )
}
