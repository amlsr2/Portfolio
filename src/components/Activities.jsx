import { ACTIVITIES } from "../constants";
import { motion } from "framer-motion";

const Activities = () => {
  return (
    <div id="activities" className="border-b border-neutral-900 pt-20 pb-40">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Activities
      </motion.h2>
      <div>
        {ACTIVITIES.map((activities, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{activities.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {activities.role} -{" "}
                <span className="text-sm text-purple-100">
                  {activities.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400 text-justify">
                {activities.description1}
              </p>
              <p className="mb-4 text-neutral-400 text-justify">
                {activities.description2}
              </p>
              <p className="mb-4 text-neutral-400 text-justify">
                {activities.description3}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activities.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 whitespace-nowrap">
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

export default Activities;