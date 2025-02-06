
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

const Work = () => {
  console.log("workkk", workData);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Latest Works</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my10 gap-5">
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
              <div className="aspect-auto rounded-lg relative cursor-pointer group overflow-hidden">
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
