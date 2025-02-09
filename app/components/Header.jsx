import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
  return (
   <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-28'>
 {/* <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-40 relative z-10 overflow-hidden'>    */}
   <motion.div
     initial={{scale:0}}
     whileInView={{scale:1}}
     transition={{duration:0.8,type:'spring',stiffness:100}}
     >
        <Image  src={isDarkMode ? assets.profile_img_dark :assets.profile_img1} alt='' className='' width={250} height={250}/>
       

    </motion.div>
     <motion.h3 
     initial={{y:-20,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{duration:0.6,delay:0.3}}
     className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
     Hi I'm Lakshmi Unni <Image src={assets.hand_icon} alt=''
  className='w-6' /></motion.h3>
  <motion.h1
   initial={{y:-30,opacity:0}}
   whileInView={{y:0,opacity:1}}
   transition={{duration:0.8,delay:0.5}}
  className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Front-End web Developer based in UAE</motion.h1>
  <motion.p
   initial={{opacity:0}}
   whileInView={{opacity:1}}
   transition={{duration:0.8,delay:0.7}} 
  className='max-w-2xl mx-auto font-Ovo'>Frontend web developer with 3 years of expertise in React JS, Next JS. Specialized in building responsive, scalable web applications optimized for performance, accessibility, and SEO. Open to global opportunities.</motion.p>
  <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
    <motion.a
     initial={{y:30,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{duration:0.6,delay:1}}
    href="#contact" 
    className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact Me
         <Image src={assets.right_arrow_white} alt=''  className='rw-4' />
    </motion.a>
    <motion.a
     initial={{y:30,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{duration:0.6,delay:1.2}}
     href="/Lakshmi_Unni_CV.pdf" download
     className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume
         <Image src={assets.download_icon} alt=''  className='w-4' />
    </motion.a>
  </div>
   </div>
  )
}

export default Header