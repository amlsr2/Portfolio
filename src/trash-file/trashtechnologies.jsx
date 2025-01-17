import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

// import {SiMysql} from "react-icons/si";         // SQL Developer (MySQL sebagai contoh)
// import {GrMysql} from "react-icons/gr";
import { BiData } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai"; // HTML
import { DiCss3 } from "react-icons/di"; // CSS
import { FaPython } from "react-icons/fa"; // Python
import { SiPhp } from "react-icons/si"; // PHP
import { SiJavascript } from "react-icons/si"; // JavaScript
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pt-10 pb-40">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        // initial={{ opacity: 0, scale: 0.8 }} // Start lebih kecil dan transparan
        // animate={{ opacity: 1, scale: 1 }} // Masuk dengan fade-in dan scale-up
        // transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* 1 */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <BiData className="text-7xl text-cyan-400" /> */}
          <BiData className="text-7xl text-slate-500" />
        </motion.div>

        {/* 2 */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <AiFillHtml5 className="text-7xl" /> */}
          <AiFillHtml5 className="text-7xl text-orange-700" />
        </motion.div>

        {/* 3 */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <DiCss3 className="text-7xl text-green-400" /> */}
          <DiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        {/* 4 */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <FaPython className="text-7xl text-red-400" /> */}
          <FaPython className="text-7xl text-blue-900" />
        </motion.div>

        {/* 5 */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <SiPhp className="text-7xl text-green-450" /> */}
          <SiPhp className="text-7xl text-sky-800" />
        </motion.div>

        {/* 6 */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <SiJavascript className="text-7xl text-sky-700" /> */}
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
