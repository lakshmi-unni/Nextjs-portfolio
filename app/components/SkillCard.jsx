import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const SkillCard = ({
    imgSrc,
    label,
    desc,
    isDarkMode
}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.8,delay:1}}
    // max-w-[768px] mx-auto"
     className='mx-auto flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:-translate-y-1 duration-500 hover:shadow-md transition-transform group'>
        <motion.figure
        whileHover={{scale:1.05}}
         className=' aspect-square border border-gray-400 rounded-lg overflow-hidden w-12 sm:w-14 p-2 cursor-pointer'>
            <Image src={imgSrc} alt={label} width={32} height={32}/>

        </motion.figure>
        <div>
            <h3 className='text-gray-700 dark:text-white'>{label}</h3>
            <p className="text-gray-600 text-sm dark:text-white/80">
                {desc}
            </p>
        </div>
     </motion.div> 
  )
}

export default SkillCard