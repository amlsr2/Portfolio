import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(CONTACT.phoneNo);
    alert("Nomor telepon telah disalin!");
  };

  const sendEmail = () => {
    window.location.href = `mailto:${CONTACT.email}`;
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

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
          className="my-4 text-center cursor-pointer"
          onClick={copyPhoneNumber}
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
          className="my-4 text-center cursor-pointer"
          onClick={sendEmail}
        >
          {CONTACT.email}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.4 }}
          className="my-4 text-center cursor-pointer"
          onClick={() => openLink(`https://${CONTACT.linkedin}`)}
        >
          Amelia Sari - Linkedin
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.4 }}
          className="my-4 text-center cursor-pointer"
          onClick={() => openLink(CONTACT.canva)}
        >
          Amelia Sari - Canva Portofolio
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
