import Image from 'next/image'
import React from 'react'

const SkillCard = ({
    imgSrc,
    label,
    desc
}) => {
  return (
    <div className='flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-md transition-transform group'>
        <figure className='bg-purple-100 aspect-square border border-gray-400 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-purple-300'>
            <Image src={imgSrc} alt={label} width={32} height={32}/>

        </figure>
        <div>
            <h3>{label}</h3>
            <p className="text-zinc-400 text-sm">
                {desc}
            </p>
        </div>
    </div>
  )
}

export default SkillCard