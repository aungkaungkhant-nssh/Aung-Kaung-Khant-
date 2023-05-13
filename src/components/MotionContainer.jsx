import React from 'react'
import { motion } from 'framer-motion'
function MotionContainer({children}) {
  return (
    <motion.div 
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.5}}
    transition={{staggerChildren:0.5}}
    >
        {children}
    </motion.div>  
  )
}

export default MotionContainer