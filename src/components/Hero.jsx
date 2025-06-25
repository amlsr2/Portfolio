import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="text-center tracking-tighter mt-[12rem] mb-[12rem] pt-1"
    >
      <motion.h1
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
      >
        Amelia Sari
      </motion.h1>
      <motion.span
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-light text-transparent"
      >
        Bachelor Degree Computer Science
      </motion.span>
      <div className="mb-1900 flex items-center justify-between py-6"></div>
    </div>
  );
};

export default Hero;
