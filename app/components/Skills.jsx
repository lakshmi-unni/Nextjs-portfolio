import React from 'react'
import { skillItem } from '@/assets/assets'
import SkillCard from './SkillCard'
import { motion } from "motion/react"

const Skills = ({isDarkMode}) => {
  return (
    
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
        {/* <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4> */}
        <motion.h4
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1,delay:0.3}}
         className='text-center mb-2 text-lg font-ovo'>Tools and technologies I use</motion.h4>
        <motion.h2
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.5}}
         className='text-center text-4xl md:text-5xl font-Ovo'>Technical Skills</motion.h2>
         <motion.p
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:0.5,delay:0.7}}
              className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Discover the powerful tools and technologies I use to create exceptional,high performing websites and apllication</motion.p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
  
       
        {
   skillItem.map(({imgSrc,label,desc},key)=>{ 
      return (
         <SkillCard isDarkMode={isDarkMode} 
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
         />
      );
   })
}
       </div>
        </motion.div>

  )
}

export default Skills