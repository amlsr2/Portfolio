import { motion } from "framer-motion";

// h2 Pertama - Muncul lebih cepat

{
  /* <motion.h2
  whileInView={{ opacity: 1, scale: 1 }}
  initial={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0 }} // No delay
  viewport={{ once: false, amount: 0.5 }}
  className="my-10 text-center text-4xl"
>
  About <span className="text-neutral-500">Me</span>
</motion.h2> */
}

// h2 Kedua - Muncul dengan Delay

//  <motion.h2
//   whileInView={{ opacity: 1, scale: 1 }}
//   initial={{ opacity: 0, scale: 0.8 }}
//   transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delay 0.5 detik
//   viewport={{ once: false, amount: 0.5 }}
//   className="my-10 text-center text-4xl"
//  >
//   Welcome to <span className="text-neutral-500">My World</span>
//  </motion.h2>

const Hero = () => {
  return (
    <div
      id="hero"
      className="text-center tracking-tighter mt-[12rem] mb-[12rem]"
    >
      <motion.h1
        // variants={container(0)}
        // initial="hidden"
        // animate="visible"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }} // No delay
        viewport={{ once: false, amount: 0.5 }}
        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
      >
        Amelia Sari
      </motion.h1>
      <motion.span
        // variants={container(0.5)}
        // initial="hidden"
        // animate="visible"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delay
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

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/amelProfile.jpg";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.h1
//               variants={container(0)}
//               initial="hidden"
//               animate="visible"
//               className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
//             >
//               Amelia Sari
//             </motion.h1>
//             <motion.span
//               variants={container(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent"
//             >
//               Fresh Graduate Computer Science
//             </motion.span>
{
  /* di p ditambahin text-justify */
}
{
  /* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p> */
}
{
  /* </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center"> */
}
{
  /* <motion.img 
            initial={{ x:100, opacity: 0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ duration:1, delay: 1.2 }}
            src={profilePic}
            alt="Kevin Rush" /> */
}

{
  /* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; */
}

// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------

// NAVBAR TRASH

// import logo from "../assets/amelLogo.png";
// import React, { useEffect, useState } from "react";
// import feather from "feather-icons";

// const Navbar = () => {
//   const [isSticky, setSticky] = useState(false);

//   useEffect(() => {
//     feather.replace();

//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setSticky(offset > 50); // Set sticky based on scroll offset
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

// rgba(120,119,198,0.3)
// rgba(255,255,255,0)
{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>; */
}

// return (
// <nav
// style={{
//   position: isSticky ? "fixed" : "static", // Set position based on isSticky
//   top: 0,
//   bottom: 550,
//   left: 32,
//   right: 32,
//   backgroundColor: isSticky
//     ? "rgba(120,119,198,0.3)"
//     : "rgba(255,255,255,0)", // Change background color if sticky \ transparent
//   boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none", // Add shadow when sticky
//   zIndex: 1000, // Ensure navbar is on top
//   padding: "0 100px", // Add horizontal padding to keep content aligned
// }}
// className="mb-20 flex items-center justify-between py-6 navbar"
// >
{
  /* LOGO */
}
// <div className="flex flex-shrink-0 items-center">
// <img className="mx-2 w-10" src={logo} alt="logo" />
// </div>
{
  /* Navigation Links */
}
{
  /* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#hero">Me</a>
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#experience">Experience</a>
        <a href="#activity">Activity</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div> */
}

{
  /* Social Media Links */
}
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/ameliasari02" id="linkedin">
//           <i data-feather="linkedin"></i>
//         </a>
//         <a href="https://github.com/amlsr2" id="github">
//           <i data-feather="github"></i>
//         </a>
//         <a href="https://www.instagram.com/wjmelly" id="instagram">
//           <i data-feather="instagram"></i>
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
