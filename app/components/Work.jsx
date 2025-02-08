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

// import { assets, workData } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "motion/react"

// const Work = ({isDarkMode}) => {
//   console.log("workkk", workData);

//   return (
//     <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     id="work" className="w-full px-[12%] py-10 scroll-mt-20">
//        <motion.h4
//        initial={{opacity:0,y:-20}}
//         whileInView={{opacity:1,y:0}}
//         transition={{duration:1,delay:0.3}} className="text-center mb-2 text-lg font-ovo">My Latest Works</motion.h4>
//         <motion.h2
//                     initial={{opacity:0,y:-20}}
//                     whileInView={{opacity:1,y:0}}
//                     transition={{duration:0.5,delay:0.5}} className="text-center text-5xl font-Ovo">My Latest Projects</motion.h2>
//      <motion.p
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.5,delay:0.7}}
//        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         Welcome to my web development portfolio! Explore a collection of
//         projects showcasing my expertise in front-end development.
//       </motion.p>

//       <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.9,delay:0.6}} className="grid grid-cols-auto my10 gap-5 dark:text-black">
//         {workData.map((project, index) => {
//           console.log("Background Image Path:", project.bgImage);

//           return (
//             <Link
//               href={project.link || "#"}
//               key={index}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <motion.div
//                   whileHover={{scale:1.05}}
//                   transition={{duration:0.3}} className="grid grid-cols-auto my10 gap-5 dark:text-black">
//                 {/* Next.js Image */}
//                 <Image
//                   src={project.bgImage} // Ensure this path is correct
//                   alt={project.title}
//                   width={500} // Adjust width
//                   height={300} // Adjust height
//                   className="w-full h-full object-cover rounded-lg"
//                 />

//                 {/* Project Details */}
//                 <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//                   <div>
//                     <h2 className="font-semibold inline-block whitespace-nowrap">{project.title}</h2>
//                     <p className="text-sm text-gray-700">{project.description}</p>
//                   <a href="">see more</a>
//                   </div>

//                   <div className="border rounded-full border-black w-7 h-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300">
//                     <Image src={assets.send_icon} alt="send icon" width={18} height={18} />
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           );
//         })}
//       </motion.div>
//       <motion.a
//           initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:0.9,delay:0.6}}
//     href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">

//         Show More<Image src={isDarkMode ?assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow"
//         className="w-4"
//          />

//       </motion.a>
//     </motion.div>
//   );
// };

// export default Work;
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Open the modal with the selected project details
  const handleModalOpen = (project) => {
    setModalContent(project);
    setShowModal(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo"
      >
        My Latest Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => {
          return (
            <div key={index} className="block">
            <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="relative w-full items-center grid grid-cols-auto my-10 gap-5 dark:text-black"
>
  {/* Next.js Image */}
  <Image
    src={project.bgImage} 
    alt={project.title}
    width={500}
    height={300}
    className="w-full h-auto object-cover rounded-lg"
  />

  {/* Project Details */}
  <div className="bg-white absolute bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-5 flex flex-col items-center justify-center text-center rounded-md shadow-lg max-sm:w-9/12 w-10/12 md:w-4/5 max-w-lg">
    
    <h2 className="font-semibold">{project.title}</h2>
    {/* Send Icon - Positioned at Top-Right */}
    <a
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-3 top-10 group"
    >
      <div className="border rounded-full border-black w-7 h-7 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300">
        <Image src={assets.send_icon} alt="send icon" width={18} height={18} />
      </div>
    </a>
    <p className="text-sm text-gray-700">{project.description}</p>
    
    <button
      onClick={() => handleModalOpen(project)}
      className="flex items-center gap-2 text-sm text-blue-600 mt-5"
    >
      Read More
      <Image alt="" src={assets.right_arrow_bold} className="w-4" />
    </button>

    {/* <a
  href={project.link || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-3"
>
  <div className="border rounded-full border-black w-7 h-7 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300">
    <Image src={assets.send_icon} alt="send icon" width={18} height={18} />
  </div>
</a> */}

  </div>
</motion.div>

            </div>
          );
        })}
      </motion.div>

      {/* Modal for displaying long description */}
      {showModal && modalContent && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          style={{ backdropFilter: "blur(1px)" }}
        >
          <div className="bg-white p-6 rounded-lg w-4/5 max-w-3xl relative">
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4"
            >
              <Image
                src={assets.close_black}
                alt="close"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>

            <h3 className="text-xl font-semibold text-gray-900">
              {modalContent.title}
            </h3>
            <p className="mt-4 text-sm text-gray-700">
              {modalContent.longDescription || "No description available."}
            </p>
            <a
              className="text-sm text-blue-600 mt-5 underline"
              href={modalContent.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
          </div>
        </motion.div>
      )}

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
