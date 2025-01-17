import logo from "../assets/amelLogo.png";
import React, { useEffect } from "react";
import feather from "feather-icons";

const Navbar = () => {
    useEffect(() => {
        feather.replace();
    }, []);

  return (
    <nav className="ml-20 mr-24 mb-20 flex items-center justify-between py-6">

      <div className="flex flex-shrink-0 items-center">
        <img className="w-10" src={logo} alt="logo" />
      </div>

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
        <a
          href="https://www.canva.com/design/DAGbBXNmk8Q/nSXH5Vylfujc2CAgIaFAWg/view?utm_content=DAGbBXNmk8Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=heb8ba666b2" id="external-link">
          <i data-feather="external-link"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
