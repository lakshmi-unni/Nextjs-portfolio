// "use client";
// import React, { useState } from "react";
// import { FaUserGraduate, FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
// import { motion } from "motion/react";

// const Qualifications = () => {
//   const [toggleState, setToggleState] = useState(1);
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   return (
//     <div id="qualifications" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20">
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-ovo"
//       >
//         My Personal Journey
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-3xl md:text-5xl font-Ovo"
//       >
//         Qualification
//       </motion.h2>

//       <div className="max-w-[768px] mx-auto">
//         <div className="flex justify-center">
//           <div
//             className={`${
//               toggleState === 1 ? "text-gray-900" : "text-gray-600 dark:text-white/80"
//             } text-xl font-normal cursor-pointer hover:text-gray-700 mx-3`}
//             onClick={() => toggleTab(1)}
//           >
//             <FaUserGraduate className="inline mr-2" /> Education
//           </div>
//           <div
//             className={`${
//               toggleState === 2 ? "text-gray-900" : "text-gray-600 dark:text-white/80"
//             } text-xl font-normal cursor-pointer hover:text-gray-700 mx-3`}
//             onClick={() => toggleTab(2)}
//           >
//             <FaBriefcase className="inline mr-2" /> Experience
//           </div>
//         </div>
//       </div>

//       <div className="grid justify-center grid-cols-1 md:grid-cols-[0.5fr] mt-5">
//         {/* Education Section */}
//         <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
//           {[ "Masters in Compuer Science", "Bachelers of Science in Physics", "HSS in Biology Science"].map((title, index) => (
//             <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-y-4 items-center my-3.5">
//               {index % 2 === 0 ? (
//                 <>
//                   <div>
//                     <h3 className="text-sm font-medium">{title}</h3>
//                     <span className="text-sm block mb-3">CCSIT CU Campus</span>
//                     <div className="flex items-center text-sm">
//                       <FaRegCalendarAlt className="mr-2" /> 2017 - 2019
//                     </div>
//                   </div>
//                   <div>
//                     <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
//                     <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div></div>
//                   <div>
//                     <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
//                     <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium">{title}</h3>
//                     <span className="text-sm block mb-3">University of Calicut</span>
//                     <div className="flex items-center text-sm">
//                       <FaRegCalendarAlt className="mr-2" /> 2024 - Present
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Experience Section */}
//         <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
//           {["Product Designer", "UX Designer", "Web Development"].map((title, index) => (
//             <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-y-4 items-center my-3.5">
//               {index % 2 === 0 ? (
//                 <>
//                   <div>
//                     <h3 className="text-sm font-medium">{title}</h3>
//                     <span className="text-sm block mb-3">Institute Name</span>
//                     <div className="flex items-center text-sm">
//                       <FaRegCalendarAlt className="mr-2" /> 2024 - Present
//                     </div>
//                   </div>
//                   <div>
//                     <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
//                     <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div></div>
//                   <div>
//                     <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
//                     <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-medium">{title}</h3>
//                     <span className="text-sm block mb-3">Institute Name</span>
//                     <div className="flex items-center text-sm">
//                       <FaRegCalendarAlt className="mr-2" /> 2024 - Present
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Qualifications;
"use client";
import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "motion/react";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="qualifications" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Personal Journey
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl md:text-5xl font-Ovo mb-8"
      >
        Qualification
      </motion.h2>

      <div className="max-w-[768px] mx-auto mb-8">
        <div className="flex justify-center">
          <div
            className={`${
              toggleState === 1 ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"
            } text-xl font-normal cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 mx-3 px-4 py-2 rounded`}
            onClick={() => toggleTab(1)}
          >
            <FaUserGraduate className="inline mr-2" /> Education
          </div>
          <div
            className={`${
              toggleState === 2 ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"
            } text-xl font-normal cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 mx-3 px-4 py-2 rounded`}
            onClick={() => toggleTab(2)}
          >
            <FaBriefcase className="inline mr-2" /> Experience
          </div>
        </div>
      </div>

      <div className="grid justify-center grid-cols-1 md:grid-cols-[0.5fr] mt-5">
        {/* Education Section */}
        <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
          {["Web Developer", "Art Director", "Web Development", "UX Designer"].map((title, index) => (
            <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-y-4 items-center my-3.5">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <h3 className="text-sm font-medium">{title}</h3>
                    <span className="text-sm block mb-3">University of Calicut</span>
                    <div className="flex items-center text-sm">
                      <FaRegCalendarAlt className="mr-2" /> 2024 - Present
                    </div>
                  </div>
                  <div>
                    <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
                    <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
                  </div>
                </>
              ) : (
                <>
                  <div></div>
                  <div>
                    <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
                    <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{title}</h3>
                    <span className="text-sm block mb-3">University of Calicut</span>
                    <div className="flex items-center text-sm">
                      <FaRegCalendarAlt className="mr-2" /> 2024 - Present
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
          {["Product Designer", "UX Designer", "Web Development"].map((title, index) => (
            <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-y-4 items-center my-3.5">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <h3 className="text-sm font-medium">{title}</h3>
                    <span className="text-sm block mb-3">Institute Name</span>
                    <div className="flex items-center text-sm">
                      <FaRegCalendarAlt className="mr-2" /> 2024 - Present
                    </div>
                  </div>
                  <div>
                    <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
                    <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
                  </div>
                </>
              ) : (
                <>
                  <div></div>
                  <div>
                    <span className="block w-[13px] h-[13px] bg-gray-500 dark:bg-white/80 rounded-full"></span>
                    <span className="block w-[1px] h-[99px] bg-black dark:bg-white/80 translate-x-[6px]"></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{title}</h3>
                    <span className="text-sm block mb-3">Institute Name</span>
                    <div className="flex items-center text-sm">
                      <FaRegCalendarAlt className="mr-2" /> 2024 - Present
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;