
// import { assets, workData } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Work = () => {
//   return (
//     <div className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-ovo">My Latest Works</h4>
//       <h2 className="text-center text-5xl font-Ovo">My Latest Projects</h2>
//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         Welcome to my web development portfolio! Explore a collection of
//         projects showcasing my expertise in front-end development.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {workData.map((project, index) => (
//           <Link href="#" key={index}> {/* Replace "#" with project URL */}
//             <div className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group">
//               {/* Background Image */}
//               <Image
//                 src={project.bgImage}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />

//               {/* Overlay Box */}
//               <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7">
//                 <div>
//                   <h2 className="font-semibold">{project.title}</h2>
//                   <p className="text-sm text-gray-700">{project.description}</p>
//                 </div>

//                 <div className="border rounded-full border-black w-9 h-9 flex items-center justify-center shadow-md group-hover:bg-lime-300">
//                   <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;


import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react"


const Work = ({isDarkMode}) => {
  console.log("workkk", workData);

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
       <motion.h4
       initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,delay:0.3}} className="text-center mb-2 text-lg font-ovo">My Latest Works</motion.h4>
        <motion.h2
                    initial={{opacity:0,y:-20}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.5,delay:0.5}} className="text-center text-5xl font-Ovo">My Latest Projects</motion.h2>
     <motion.p
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.7}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.9,delay:0.6}} className="grid grid-cols-auto my10 gap-5 dark:text-black">
        {workData.map((project, index) => {
          console.log("Background Image Path:", project.bgImage);

          return (
            <Link 
              href={project.link || "#"} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                  whileHover={{scale:1.05}}
                  transition={{duration:0.3}} className="grid grid-cols-auto my10 gap-5 dark:text-black">
                {/* Next.js Image */}
                <Image
                  src={project.bgImage} // Ensure this path is correct
                  alt={project.title}
                  width={500} // Adjust width
                  height={300} // Adjust height
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Project Details */}
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>

                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300">
                    <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
      <motion.a
          initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.9,delay:0.6}} 
    href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">

        Show More<Image src={isDarkMode ?assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow"
        className="w-4"
         />

      </motion.a>
    </motion.div>
  );
};

export default Work;
