import logo from "../assets/amelLogo.png";
// import {FaLinkedin} from "react-icons/fa";
// import {FaGithub} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa6";
// import {FaInstagram} from "react-icons/fa";

import React, { useEffect } from "react";
import feather from "feather-icons";

const Navbar = () => {
    useEffect(() => {
    //     // Menginisialisasi Feather Icons
        feather.replace();
    }, []);

  return (
    <nav className="ml-20 mr-24 mb-20 flex items-center justify-between py-6">
      {/* LOGO */}
      <div className="flex flex-shrink-0 items-center">
        <img className="w-10" src={logo} alt="logo" />
      </div>

      {/* Petunjuk navbar */}
      {/* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#hero">Me</a>
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#experience">Experience</a>
        <a href="#activity">Activity</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div> */}

      {/* social media very new */}
      <div className="flex items-center justify-center gap-3">
        <a href="https://www.linkedin.com/in/ameliasari02" id="linkedin">
          <i data-feather="linkedin"></i>
        </a>
        <a href="https://github.com/amlsr2" id="github">
          <i data-feather="github"></i>
        </a>
        <a href="https://www.instagram.com/wjmelly" id="instagram">
          <i data-feather="instagram"></i>
        </a>
      </div>

      {/* social media new
      <nav>
        <ul>
          <li>
            <a href="#home">
              <i data-feather="home"></i> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i data-feather="info"></i> About
            </a>
          </li>
          <li>
            <a href="#services">
              <i data-feather="briefcase"></i> Services
            </a>
          </li>
          <li>
            <a href="#contact">
              <i data-feather="mail"></i> Contact
            </a>
          </li>
        </ul>
      </nav> */}

      {/* SOCIAL MEDIA old */}
      {/* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div> */}
    </nav>
  );
};

export default Navbar;
