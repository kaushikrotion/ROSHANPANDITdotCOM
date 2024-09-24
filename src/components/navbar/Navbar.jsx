import React from 'react';
import "./navbar.scss";
import Sidebar from '../sidebar/Sidebar';
import {motion} from "framer-motion";

function Navbar() {
  const items = [
    "HOMEPAGE",
    "PROJECTS",
    "PORTFOLIO",
    "CONTACTS",
  ]
  return (
    <div>
      <div className="navbar" >
          {/* <motion.img 
          initial = {{
            opacity: 0,
            scale : 0,
            x: -50,
          }}
          animate= {{
            opacity: 1,
            scale: 1,
            x:0,
          }}
          transition={{g
            duration: 1,
          }} */}
          <img src="../../myicon.png" 
          alt="icon" 
          />
          <div className="navbar-links">
          {items.map(item =>
            <motion.a href={`/${item}`} key={item} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>{item}</motion.a>
          )}
          </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Navbar