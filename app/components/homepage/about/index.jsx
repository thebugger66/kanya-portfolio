// +"use client";

// import { personalData } from "@/utils/data/personal-data";
// import Image from "next/image";


// function AboutSection() {
//   return (
//     <div id="about" className="my-12 lg:my-16 relative">
//       <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           ABOUT ME
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//         <div className="order-2 lg:order-1">
//           <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
//             Who I am?
//           </p>
//           <p className="text-gray-200 text-sm lg:text-lg ">
//             {personalData.description}
//           </p>
//         </div>
//         <div className="flex justify-center order-1 lg:order-2">
//           <Image
//             src={personalData.profile}
//             width={350}
//             height={230}
//             alt="Hariprasad Takle"
//             className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;




"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div
      id="about"
      className="my-16 lg:my-24 relative px-4 sm:px-6 lg:px-0"
    >
      {/* Side Label for Larger Screens */}
      <div className="hidden lg:flex flex-col items-center absolute top-0 -right-10">
        <span className="bg-[#1a1443] text-white rotate-90 py-2 px-5 text-sm sm:text-base md:text-lg rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        
        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={400}
            height={400}
            alt="Bhargavram pedgaonkar"
            className="rounded-2xl shadow-lg object-cover
              transition-all duration-700 
              grayscale hover:grayscale-0 hover:scale-105 
              w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="font-semibold mb-3 text-[#16f2b3] text-lg sm:text-xl uppercase tracking-wide">
            Who I am?
          </p>

          <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
