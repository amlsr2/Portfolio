import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pt-20 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 w-40 h-40 rounded object-cover"
              />
            </motion.div>

            {/* Project Details Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>

              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// OLD
// // rafce

// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <div id="projects" className="border-b border-neutral-900 pt-20 pb-20">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         // initial={{ opacity: 0, scale: 0.8 }} // Start lebih kecil dan transparan
//         // animate={{ opacity: 1, scale: 1 }} // Masuk dengan fade-in dan scale-up
//         // transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h2>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//               className="w-full lg:w-1/4"
//             >
//               <img
//                 src={project.image}
// width={150}
//                 height={150}
//                 alt={project.title}
//                 className="mb-6 rounded"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h6 className="mb-2 font-semibold">{project.title}</h6>
//               <p className="mb-4 text-neutral-400">{project.description}</p>
//               {project.technologies1.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
