import React, { useEffect, useState } from "react";
import logo from "../assets/amelLogo.png";
import { Tooltip } from "react-tooltip";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { BsFileEarmarkSlides } from "react-icons/bs";

const sections = [
  "about",
  "technologies",
  "experience",
  "activities",
  "projects",
  "contact",
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ameliasari02",
    icon: <FiLinkedin />,
    tooltip: "LinkedIn",
  },
  {
    href: "https://github.com/amlsr2",
    icon: <FiGithub />,
    tooltip: "Github",
  },
  {
    href: "https://sites.google.com/view/ameliasaricertificate/beranda",
    icon: <GrCertificate />,
    tooltip: "certificate",
  },
  {
    href: "https://s.id/Portfolio_Amelia_Sari",
    icon: <BsFileEarmarkSlides />,
    tooltip: "Canva Portfolio",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));
      for (let section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Utama */}
      <nav className="fixed top-0 left-0 w-full bg-black/20 shadow-md z-50 flex items-center justify-between py-4 px-6 md:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="hero" smooth={true} duration={0.3} offset={-200}>
            <img className="w-10 cursor-pointer" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Menu Navigasi Desktop dan Tablet */}
        {/* <div className="hidden md:flex items-center space-x-10 text-white font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition hover:text-purple-400 ${
                activeSection === section ? "text-purple-400" : "text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div> */}

        {/* Ikon Sosial Media Desktop dan Tablet */}
        {/* <div className="hidden md:flex items-center space-x-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              data-tooltip-id={item.tooltip}
              className="group transition"
            >
              <span className="text-white group-hover:text-purple-400 transition text-xl">
                {item.icon}
              </span>
              <Tooltip
                id={item.tooltip}
                content={item.tooltip}
                place="top"
                style={{ color: "#fbcfe8" }}
              />
            </a>
          ))}
        </div> */}

        {/* Menu Navigasi Desktop dan Tablet */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-10 text-white font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition hover:text-purple-400 ${
                activeSection === section ? "text-purple-400" : "text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Ikon Sosial Media Desktop dan Tablet */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              data-tooltip-id={item.tooltip}
              className="group transition"
            >
              <span className="text-white group-hover:text-purple-400 transition text-xl">
                {item.icon}
              </span>
              <Tooltip
                id={item.tooltip}
                content={item.tooltip}
                place="top"
                style={{ color: "#fbcfe8" }}
              />
            </a>
          ))}
        </div>

        {/* Tombol Menu Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              data-tooltip-id={`${item.tooltip}-mobile`}
              className="group transition"
            >
              <span className="text-white group-hover:text-purple-400 transition text-xl">
                {item.icon}
              </span>
              <Tooltip
                id={`${item.tooltip}-mobile`}
                content={item.tooltip}
                place="top"
                style={{ color: "#fbcfe8" }}
              />
            </a>
          ))}

          {/* Menu Navigasi Mobile */}
          <button
            className="text-white hover:text-purple-400 transition"
            onClick={() => setIsOpen(true)}
            data-tooltip-id="navigation"
          >
            <Menu size={32} />
          </button>
          <Tooltip
            id="navigation"
            content="Navigation"
            place="top"
            style={{ color: "#fbcfe8" }}
          />
        </div>
      </nav>

      {/* Overlay klik dimana saja untuk menutup bebas sidebar */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/50 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col justify-between`}
      >
        {/* Menu Navigasi Mobile */}
        <div className="flex flex-col items-center space-y-6 text-lg mt-20">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition hover:text-purple-400 ${
                activeSection === section ? "text-purple-400" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Tombol Close Sidebar */}
        <div className="flex justify-center p-28">
          <button
            onClick={() => setIsOpen(false)}
            className="group text-white transition"
            data-tooltip-id="close-tooltip"
          >
            <X size={32} className="group-hover:text-purple-400 transition" />
          </button>
          <Tooltip
            id="close-tooltip"
            content="Close"
            place="top"
            style={{ color: "#fbcfe8" }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
