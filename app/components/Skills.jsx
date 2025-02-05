import React from 'react'
import { skillItem } from '@/assets/assets'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    
    <div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
        {/* <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4> */}
        <h4 className='text-center mb-2 text-lg font-ovo'>Discover the powerful tools and technologies I use to Create exceptional,high performing websites and apllication</h4>
        <h2 className='text-center text-5xl font-Ovo'>Essential Tools I Use</h2>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">

       
        {
   skillItem.map(({imgSrc,label,desc},key)=>{ 
      return (
         <SkillCard 
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
         />
      );
   })
}
       </div>
        </div>

  )
}

export default Skills