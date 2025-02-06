// "use client";
// import React, { useState } from 'react'
// import { FaUserGraduate } from "react-icons/fa";
// import { FaBriefcase } from "react-icons/fa";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import './qualification.css'

// const Qualifications = () => {
//     const [toggleState, setToggleState] = useState(1)
//     const toggleTab =(index)=>{
//         setToggleState(index)
//     }
//   return (
//     <div id='qualifications' className='w-full px-[12%] py-10 scroll-mt-20'>
//     <h4 className='text-center mb-2 text-lg font-ovo'>My Personal Journey</h4>
//     <h2 className='text-center text-5xl font-Ovo'>Qualification</h2>

//     <div className="qualification__container container">
//         <div className="qualification__tabs">
//         <div className={`${toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}`}
//         onClick={()=>toggleTab(1)}>

//                 <FaUserGraduate/>
//                 Education

//             </div>
//             <div className={`${toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}`}  
//             onClick={()=>toggleTab(2)}>
//             <FaBriefcase/>
//                 Experience

//             </div>

//         </div>

//     </div>
    
//     <div className="qualification__sections">
//     <div className={`${toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}`}>

//             <div className="qualification__data">
//                 <div>
//                     <h3 className="qualification__title">web developer</h3>
//                         <span className="qualification__subtitle">University Of calicut</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                    
//                 </div>

//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>


//             </div>

//             <div className="qualification__data">
//                 <div></div>
//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>
//                 <div>
//                     <h3 className="qualification__title">Art director </h3>
//                         <span className="qualification__subtitle">University Of calicut</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                   
//                 </div>

               


//             </div>
//             <div className="qualification__data">
//                 <div>
//                     <h3 className="qualification__title">web development</h3>
//                         <span className="qualification__subtitle">University Of calicut</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                    
//                 </div>

//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>


//             </div>

//             <div className="qualification__data">
//                 <div></div>
//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>
//                 <div>
//                     <h3 className="qualification__title">ux designer </h3>
//                         <span className="qualification__subtitle">University Of calicut</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                   
//                 </div>

               


//             </div>
//         </div>

//         <div className={`${toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}`}>
//         <div className="qualification__data">
//                 <div>
//                     <h3 className="qualification__title">product designer</h3>
//                         <span className="qualification__subtitle">microsoft - institutet</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                    
//                 </div>

//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>


//             </div>

//             <div className="qualification__data">
//                 <div></div>
//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>
//                 <div>
//                     <h3 className="qualification__title">UX designer </h3>
//                         <span className="qualification__subtitle">UAE intitute</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                   
//                 </div>

               


//             </div>
//             <div className="qualification__data">
//                 <div>
//                     <h3 className="qualification__title">web development</h3>
//                         <span className="qualification__subtitle">University kerala</span>
//                         <div className="qualification__calender">
//                        < FaRegCalendarAlt/>2024 - Present
//                         </div>
                    
//                 </div>

//                 <div>
//                     <span className="qualification__rounder"></span>
//                     <span className="qualification__line"></span>
//                 </div>


//             </div>

           
//         </div>
//     </div>
    

//     </div>
//   )
// }

// export default Qualifications
// "use client";
// import React, { useState } from 'react';
// import { FaUserGraduate, FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";

// const Qualifications = () => {
//     const [toggleState, setToggleState] = useState(1);
//     const toggleTab = (index) => {
//         setToggleState(index);
//     };

//     return (
//         <div id='qualifications' className='w-full px-[12%] py-10 scroll-mt-20'>
//             <h4 className='text-center mb-2 text-lg font-ovo'>My Personal Journey</h4>
//             <h2 className='text-center text-5xl font-Ovo'>Qualification</h2>
            
//             <div className="max-w-[768px] mx-auto">
//                 <div className="flex justify-center">
//                     <div 
//                         className={`${toggleState === 1 ? "text-gray-900" : "text-gray-600"} text-xl font-normal cursor-pointer hover:text-gray-700 mx-3`} 
//                         onClick={() => toggleTab(1)}
//                     >
//                         <FaUserGraduate className="inline mr-2"/> Education
//                     </div>
//                     <div 
//                         className={`${toggleState === 2 ? "text-gray-900" : "text-gray-600"} text-xl font-normal cursor-pointer hover:text-gray-700 mx-3`}  
//                         onClick={() => toggleTab(2)}
//                     >
//                         <FaBriefcase className="inline mr-2"/> Experience
//                     </div>
//                 </div>
//             </div>

//             <div className="grid justify-center grid-cols-[0.5fr] mt-5">
//                 {/* Education Section */}
//                 <div className={`${toggleState === 1 ? "block" : "hidden"}`}> 
//                     {["Web Developer", "Art Director", "Web Development", "UX Designer"].map((title, index) => (
//                         <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-6 items-center my-4">
//                             {index % 2 === 0 ? (
//                                 <>
//                                     <div>
//                                         <h3 className="text-sm font-medium">{title}</h3>
//                                         <span className="text-sm block mb-3">University of Calicut</span>
//                                         <div className="flex items-center text-sm">
//                                             <FaRegCalendarAlt className="mr-2"/> 2024 - Present
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
//                                         <span className="block w-[1px] h-[99px] bg-black translate-x-[6px] "></span>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <>
//                                     <div></div>
//                                     <div>
//                                         <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
//                                         <span className="block w-[1px] h-[99px] bg-black translate-x-[6px]"></span>
//                                     </div>
//                                     <div>
//                                         <h3 className="text-sm font-medium">{title}</h3>
//                                         <span className="text-sm block mb-3">University of Calicut</span>
//                                         <div className="flex items-center text-sm">
//                                             <FaRegCalendarAlt className="mr-2"/> 2024 - Present
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Experience Section */}
//                 <div className={`${toggleState === 2 ? "block" : "hidden"}`}> 
//                     {["Product Designer", "UX Designer", "Web Development"].map((title, index) => (
//                         <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-6 items-center my-4">
//                             {index % 2 === 0 ? (
//                                 <>
//                                     <div>
//                                         <h3 className="text-sm font-medium">{title}</h3>
//                                         <span className="text-sm block mb-3">Institute Name</span>
//                                         <div className="flex items-center text-sm">
//                                             <FaRegCalendarAlt className="mr-2"/> 2024 - Present
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
//                                         <span className="block w-[1px] h-[99px] bg-black translate-x-[6px]"></span>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <>
//                                     <div></div>
//                                     <div>
//                                         <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
//                                         <span className="block w-[1px] h-[99 px] bg-black translate-x-[6px]"></span>
//                                     </div>
//                                     <div>
//                                         <h3 className="text-sm font-medium">{title}</h3>
//                                         <span className="text-sm block mb-3">Institute Name</span>
//                                         <div className="flex items-center text-sm">
//                                             <FaRegCalendarAlt className="mr-2"/> 2024 - Present
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Qualifications;

"use client";
import React, { useState } from 'react';
import { FaUserGraduate, FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div id='qualifications' className='w-full px-6 md:px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>My Personal Journey</h4>
            <h2 className='text-center text-3xl md:text-5xl font-Ovo'>Qualification</h2>
            
            <div className="max-w-[768px] mx-auto">
                <div className="flex justify-center">
                    <div 
                        className={`${toggleState === 1 ? "text-gray-900" : "text-gray-600"} text-xl font-normal cursor-pointer hover:text-gray-700 mx-3`} 
                        onClick={() => toggleTab(1)}
                    >
                        <FaUserGraduate className="inline mr-2"/> Education
                    </div>
                    <div 
                        className={`${toggleState === 2 ? "text-gray-900" : "text-gray-600"} text-xl font-normal cursor-pointer hover:text-gray-700 mx-3`}  
                        onClick={() => toggleTab(2)}
                    >
                        <FaBriefcase className="inline mr-2"/> Experience
                    </div>
                </div>
            </div>

            <div className="grid justify-center grid-cols-1 md:grid-cols-[0.5fr] mt-5">
                {/* Education Section */}
                <div className={`${toggleState === 1 ? "block" : "hidden"}`}> 
                    {["Web Developer", "Art Director", "Web Development", "UX Designer"].map((title, index) => (
                        <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-6 items-center my-4">
                            {index % 2 === 0 ? (
                                <>
                                    <div>
                                        <h3 className="text-sm font-medium">{title}</h3>
                                        <span className="text-sm block mb-3">University of Calicut</span>
                                        <div className="flex items-center text-sm">
                                            <FaRegCalendarAlt className="mr-2"/> 2024 - Present
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
                                        <span className="block w-[1px] h-[99px] bg-black translate-x-[6px] "></span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div></div>
                                    <div>
                                        <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
                                        <span className="block w-[1px] h-[99px] bg-black translate-x-[6px]"></span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium">{title}</h3>
                                        <span className="text-sm block mb-3">University of Calicut</span>
                                        <div className="flex items-center text-sm">
                                            <FaRegCalendarAlt className="mr-2"/> 2024 - Present
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
                        <div key={index} className="grid grid-cols-[1fr_max-content_1fr] gap-6 items-center my-4">
                            {index % 2 === 0 ? (
                                <>
                                    <div>
                                        <h3 className="text-sm font-medium">{title}</h3>
                                        <span className="text-sm block mb-3">Institute Name</span>
                                        <div className="flex items-center text-sm">
                                            <FaRegCalendarAlt className="mr-2"/> 2024 - Present
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
                                        <span className="block w-[1px] h-[99px] bg-black translate-x-[6px]"></span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div></div>
                                    <div>
                                        <span className="block w-[13px] h-[13px] bg-gray-500 rounded-full"></span>
                                        <span className="block w-[1px] h-[99px] bg-black translate-x-[6px]"></span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium">{title}</h3>
                                        <span className="text-sm block mb-3">Institute Name</span>
                                        <div className="flex items-center text-sm">
                                            <FaRegCalendarAlt className="mr-2"/> 2024 - Present
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

