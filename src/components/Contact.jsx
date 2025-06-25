import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { FiLinkedin } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Contact = () => {
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(CONTACT.phoneNo);
    alert("Nomor telepon telah disalin!");
  };

  const sendEmail = () => {
    window.location.href = `mailto:${CONTACT.email}`;
  };

  const openLink = (url) => {
    window.location.href = url;
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pt-64 pb-72">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="my-16 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      <div className="flex justify-center gap-8 text-3xl text-white space-x-5">
        {/* Phone */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer hover:text-purple-400"
          onClick={copyPhoneNumber}
          data-tooltip-id="contact-tooltip"
          data-tooltip-content="Klik untuk menyalin Nomor Telepon"
        >
          <HiOutlinePhone />
        </motion.div>

        {/* Email */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer hover:text-purple-400"
          onClick={sendEmail}
          data-tooltip-id="contact-tooltip"
          data-tooltip-content="Klik untuk mengirim Email"
        >
          <FaRegEnvelope />
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer hover:text-purple-400"
          onClick={() => openLink(CONTACT.linkedin)}
          data-tooltip-id="contact-tooltip"
          data-tooltip-content="Klik untuk membuka LinkedIn"
        >
          <FiLinkedin />
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer hover:text-purple-400"
          onClick={() => openLink(CONTACT.whatsapp)}
          data-tooltip-id="contact-tooltip"
          data-tooltip-content="Klik untuk mengirim pesan di WhatsApp"
        >
          <FaWhatsapp />
        </motion.div>

        {/* Instagram */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer hover:text-purple-400"
          onClick={() => openLink(CONTACT.instagram)}
          data-tooltip-id="contact-tooltip"
          data-tooltip-content="Klik untuk membuka Instagram"
        >
          <FaInstagram />
        </motion.div>

        <Tooltip
          id="contact-tooltip"
          place="bottom"
          style={{
            backgroundColor: "#fffff",
            color: "#fbcfe8",
            fontSize: "14px",
            borderRadius: "8px",
            padding: "2px 12px",
            border: "1px solid #fbcfe8",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
