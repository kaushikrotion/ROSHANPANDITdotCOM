import React from 'react'
import { motion } from 'framer-motion';

export default function Links() {
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  }
}
  const itemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 100,
      opacity: 0,
    }
  }
  const items = [
    "homepage",
    "portfolio",
    "blog",
    "contacts",
  ]
  return (
    <motion.div className='links' variants={variants}>
        {items.map(item =>
          <motion.a href={item == "homepage" ? "/" : `/${item}`} key={item} variants={itemsVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>{item.toUpperCase()}</motion.a>
        )}
    </motion.div>
  )
}
