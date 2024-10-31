import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pt-20 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="my-4 text-center"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
          className="my-4 text-center"
        >
          {CONTACT.email}
        </motion.p>

        <a
          href="https://www.linkedin.com/in/ameliasari02"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b"
        >
          Amelia Sari - linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
