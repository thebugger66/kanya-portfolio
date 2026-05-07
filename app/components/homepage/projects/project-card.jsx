// "use client";
// import * as React from 'react';

// function ProjectCard({ project }) {

//   return (
//     <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
//       <div className="flex flex-row">
//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//         <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//       </div>
//       <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
//         <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
//         </div>
//         <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
//           {project.name}
//         </p>
//       </div>
//       <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//         <code className="font-mono text-xs md:text-sm lg:text-base">
//           <div className="blink">
//             <span className="mr-2 text-pink-500">const</span>
//             <span className="mr-2 text-white">project</span>
//             <span className="mr-2 text-pink-500">=</span>
//             <span className="text-gray-400">{'{'}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//             <span className="text-gray-400">{`'`}</span>
//             <span className="text-amber-300">{project.name}</span>
//             <span className="text-gray-400">{`',`}</span>
//           </div>

//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className=" text-white">tools:</span>
//             <span className="text-gray-400">{` ['`}</span>
//             {
//               project.tools.map((tag, i) => (
//                 <React.Fragment key={i}>
//                   <span className="text-amber-300">{tag}</span>
//                   {
//                     project.tools?.length - 1 !== i &&
//                     <span className="text-gray-400">{`', '`}</span>
//                   }
//                 </React.Fragment>
//               ))
//             }
//             <span className="text-gray-400">{"],"}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
//             <span className="text-orange-400">{project.role}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className="text-white">Description:</span>
//             <span className="text-cyan-400">{' ' + project.description}</span>
//             <span className="text-gray-400">,</span>
//           </div>
          
//           <div><span className="text-gray-400">{`};`}</span></div>
//         </code>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



"use client";
import * as React from 'react';
import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi'; // Make sure to install react-icons

function ProjectCard({ project }) {
  return (
    <Link 
      href={project.demo || '#'} 
      target="_blank"
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#1a1443] border border-[#2a2e5a] transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/20"
    >
      {/* Fixed-size Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#2a2e5a]">
        <img 
          src={project.image} 
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* View Project Overlay Icon */}
        <div className="absolute top-4 right-4 bg-[#1a1443]/80 p-2 rounded-full text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-violet-500">
          <HiExternalLink size={20} />
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1443] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-white lg:text-xl line-clamp-1 group-hover:text-violet-400 transition-colors">
            {project.name}
          </h3>
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-violet-400">
            {project.role}
          </span>
        </div>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tools and "View" indicator */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tag, i) => (
              <span 
                key={i}
                className="rounded-md bg-[#231d4b] border border-[#353a71] px-2 py-1 text-[11px] font-medium text-[#16f2b3]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <span className="text-xs font-bold text-violet-400 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
            VIEW →
          </span>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="h-1 w-full bg-[#2a2e5a]">
        <div className="h-full w-0 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-700 group-hover:w-full"></div>
      </div>
    </Link>
  );
};

export default ProjectCard;