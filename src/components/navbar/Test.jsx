import React from 'react'
import { motion } from "framer-motion"

const Test = () => {
  const listItems = ["item 1", "item 2", "item 3", "item 4"];
  const variants = {
    visible: {
      opacity:1,
      transition: {staggerChildren: 0.5},
    },
    hidden : {opacity:0},
  };
  return (
      <div className='course'>
        <motion.ul variants={variants} initial="hidden" animate="visible">
          {listItems.map((item) => (<motion.li variants={variants} key={item}>
            {item}
            </motion.li>))}
          </motion.ul>
      </div>
  )
};
export default Test;