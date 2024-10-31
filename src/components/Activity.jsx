import { ACTIVITIES } from "../constants";
import { motion } from "framer-motion";

const Activity = () => {
  return (
    <div id="activity" className="border-b border-neutral-900 pt-20 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Activity
      </motion.h2>
      <div>
        {ACTIVITIES.map((activity, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Tahun Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{activity.year}</p>
            </motion.div>

            {/* Deskripsi dan Badge Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {activity.role} -{" "}
                <span className="text-sm text-purple-100">
                  {activity.company}
                </span>
              </h6>

              {/* Deskripsi text-justify dengan spasi vertikal */}
              <p className="mb-4 text-neutral-400 text-justify">
                {activity.description1}
              </p>
              <p className="mb-4 text-neutral-400 text-justify">
                {activity.description2}
              </p>
              <p className="mb-4 text-neutral-400 text-justify">
                {activity.description3}
              </p>

              {/* Badge Container */}
              <div className="mt-4 flex flex-wrap gap-2">
                {activity.technologies.map((tech, index) => (
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

export default Activity;