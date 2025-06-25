import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pt-20 pb-40">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <motion.h2
        whileInView={{ opacity: 1, y: 1 }}
        initial={{ opacity: 0, y: 0.8 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
        viewport={{ once: false, amount: 1 }}
        className="my-20 text-center text-slate-400 font-mono italic"
      >
        /ᐠ • ˕ •マ ?
        <br />
        <br />
        ⋅˚₊‧ <span className="text-pink-200">Click </span>the{" "}
        <span className="text-pink-200">image </span>or the{" "}
        <span className="text-pink-200">title </span> to open the project
        details ‧₊˚⋅
        <br />
        <br />
        ദ്ദി（• ˕ •マ⭑.ᐟ
      </motion.h2>

      {/* <p>
        ⌞ Click the image or the title to open the project details ⌝
        <br />
        <br />
        𓆩 Click the image or the title to open the project details 𓆪
        <br />
        <br />
        ≽ Click the image or the title to open the project details ≼
        <br />
        <br />
        ⊹ ࣪ ﹏𓊝﹏﹏𓂁﹏⊹ ࣪ ˖
        <br />
        <br />
        °:•. Click the image or the title to open the project details .•:°
        <br />
        <br />
        𓆝 𓆟 𓆞 𓆝 𓆟
      </p> */}

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <a
                href={project.url}
                rel="noopener noreferrer"
                className="mb-6 block w-40 h-40"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded object-cover"
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.url}
                rel="noopener noreferrer"
                className="text-pink-300 hover:underline"
              >
                <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              </a>

              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400 whitespace-nowrap"
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
