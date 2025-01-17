// rafce

import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pt-20 pb-20">
      <motion.h2
        // whileInView={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 0, y: -100 }}
        // transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }} // Animasi saat terlihat
        initial={{ opacity: 0, scale: 0.8 }} // Awal lebih kecil dan transparan
        transition={{ duration: 0.6, ease: "easeOut" }} // Transisi smooth
        viewport={{ once: false, amount: 0.5 }} // Animasi bisa terulang
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      {/* h2 Pertama - Muncul lebih cepat */}
      {/* <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }} // No delay
        viewport={{ once: false, amount: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2> */}

      {/* h2 Kedua - Muncul dengan Delay
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delay 0.5 detik
        viewport={{ once: false, amount: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Welcome to <span className="text-neutral-500">My World</span>
      </motion.h2> */}

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          //   whileInView={{ opacity: 1, scale: 1 }}
          //   initial={{ opacity: 0, scale: 0.8 }}
          //   transition={{ duration: 0.6, ease: "easeOut", delay: 0 }} // No delay
          //   viewport={{ once: false, amount: 0.5 }}

          //   whileInView={{ opacity: 1, y: 0 }}
          //   initial={{ opacity: 0, y: -100 }}
          //   transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="my-4 text-center"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
          //   whileInView={{ opacity: 1, scale: 1 }}
          //   initial={{ opacity: 0, scale: 0.8 }}
          //   transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delay 0.5 detik
          //   viewport={{ once: false, amount: 0.5 }}

          //   whileInView={{ opacity: 1, y: 0 }}
          //   initial={{ opacity: 0, y: -100 }}
          //   transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="my-4 text-center"
        >
          {CONTACT.email}
        </motion.p>

        {/* <a href="#" className="border-b">
          {CONTACT.linkedin}
        </a> */}

        <a
          href="https://www.linkedin.com/in/ameliasari02" // Ganti dengan URL LinkedIn kamu
          // target="_blank"
          // rel="noopener noreferrer"
          className="border-b"
        >
          Amelia Sari - linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
