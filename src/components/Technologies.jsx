// import { BiData } from "react-icons/bi";
// import { AiFillHtml5 } from "react-icons/ai";
// import {
//   DiCss3,
//   DiEclipse,
//   DiMysql,
// } from "react-icons/di";
// import {
//   FaPython,
//   FaJava,
//   FaGithubSquare,
//   FaGitAlt,
// } from "react-icons/fa";
// import { VscVscodeInsiders } from "react-icons/vsc";
// import {
//   SiPhp,
//   SiJavascript,
//   SiSelenium,
//   SiJira,
//   SiApachemaven,
//   SiPostman,
//   SiFilezilla,
//   SiLaragon,
//   SiOracle,
//   SiGooglecolab,
//   SiMiro,
// } from "react-icons/si";
// import {
//   PiMicrosoftExcelLogoFill,
//   PiMicrosoftPowerpointLogoFill,
//   PiMicrosoftWordLogoFill,
//   PiMicrosoftWordLogoDuotone,
//   PiMicrosoftExcelLogoDuotone,
//   PiMicrosoftPowerpointLogoDuotone,
//   PiMicrosoftOutlookLogoDuotone,
//   PiMicrosoftTeamsLogoDuotone,
// } from "react-icons/pi";
// import { motion } from "framer-motion";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";


// const iconVariants = (duration) => ({
//     initial: {y: -10},
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         },
//     },
// });

// const Technologies = () => {
//    const responsiveIconClass = "text-5xl sm:text-5xl md:text-6xl";

//   return (
//     <div id="technologies" className="border-b border-neutral-900 pt-20 pb-40">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h2>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         {/* Database */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Database"
//         >
//           <BiData className={`${responsiveIconClass} text-slate-500`} />
//         </motion.div>

//         {/* Laragon */}
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Laragon"
//         >
//           <SiLaragon className={`${responsiveIconClass} text-sky-500`} />
//         </motion.div>

//         {/* MySQL */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="MySQL"
//         >
//           <DiMysql className={`${responsiveIconClass} text-blue-900`} />
//         </motion.div>
//         {/* Oracle SQL */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Oracle SQL"
//         >
//           <SiOracle className={`${responsiveIconClass} text-red-600`} />
//         </motion.div>
//         {/* Github */}
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Github"
//         >
//           <FaGithubSquare className={`${responsiveIconClass} text-white-100`} />
//         </motion.div>
//         {/* Git */}
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Git"
//         >
//           <FaGitAlt className={`${responsiveIconClass} text-orange-700`} />
//         </motion.div>
//         {/* ganti baris */}
//         <div className="w-full" />
//         {/* ganti baris */}
//         {/* VSCode */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="VSCode"
//         >
//           <VscVscodeInsiders
//             className={`${responsiveIconClass} text-sky-500`}
//           />
//         </motion.div>
//         {/* Googlecolab  */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Google Colab"
//         >
//           <SiGooglecolab className={`${responsiveIconClass} text-orange-600`} />
//         </motion.div>

//         {/* HTML */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="HTML"
//         >
//           <AiFillHtml5 className={`${responsiveIconClass} text-orange-700`} />
//         </motion.div>
//         {/* CSS */}
//         <motion.div
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="CSS"
//         >
//           <DiCss3 className={`${responsiveIconClass} text-blue-500`} />
//         </motion.div>
//         {/* Javascript */}
//         <motion.div
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Javascript"
//         >
//           <SiJavascript className={`${responsiveIconClass} text-yellow-400`} />
//         </motion.div>
//         {/* PHP */}
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="PHP"
//         >
//           <SiPhp className={`${responsiveIconClass} text-sky-800`} />
//         </motion.div>
//         {/* Python */}
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Python"
//         >
//           <FaPython className={`${responsiveIconClass} text-blue-800`} />
//         </motion.div>
//         {/* Java */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Java"
//         >
//           <FaJava className={`${responsiveIconClass} text-blue-600`} />
//         </motion.div>
//         {/* ganti baris */}
//         <div className="w-full" />
//         {/* ganti baris */}
//         {/* Jira */}
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Jira"
//         >
//           <SiJira className={`${responsiveIconClass} text-blue-700`} />
//         </motion.div>
//         {/* Postman */}
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Postman"
//         >
//           <SiPostman className={`${responsiveIconClass} text-orange-600`} />
//         </motion.div>
//         {/* Filezilla  */}
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Filezilla "
//         >
//           <SiFilezilla className={`${responsiveIconClass} text-red-700`} />
//         </motion.div>
//         {/* Eclipse */}
//         <motion.div
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Eclipse"
//         >
//           <DiEclipse className={`${responsiveIconClass} text-blue-900`} />
//         </motion.div>
//         {/* Selenium */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Selenium"
//         >
//           <SiSelenium className={`${responsiveIconClass} text-gray-400`} />
//         </motion.div>
//         {/* Maven */}
//         <motion.div
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Maven"
//         >
//           <SiApachemaven className={`${responsiveIconClass} text-orange-700`} />
//         </motion.div>
//         {/* ganti baris */}
//         <div className="w-full" />
//         {/* ganti baris */}
//         {/* Word */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Microsoft Word"
//         >
//           <PiMicrosoftWordLogoDuotone
//             className={`${responsiveIconClass} text-blue-600`}
//           />
//         </motion.div>
//         {/* Excel */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Microsoft Excel"
//         >
//           <PiMicrosoftExcelLogoDuotone
//             className={`${responsiveIconClass} text-green-600`}
//           />
//         </motion.div>
//         {/* PPT */}
//         <motion.div
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Microsoft PowerPoint"
//         >
//           <PiMicrosoftPowerpointLogoDuotone
//             className={`${responsiveIconClass} text-orange-700`}
//           />
//         </motion.div>
//         {/* Outlook  */}
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Microsoft Outlook"
//         >
//           <PiMicrosoftOutlookLogoDuotone
//             className={`${responsiveIconClass} text-blue-600`}
//           />
//         </motion.div>
//         {/* Teams  */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Microsoft Teams"
//         >
//           <PiMicrosoftTeamsLogoDuotone
//             className={`${responsiveIconClass} text-indigo-600`}
//           />
//         </motion.div>
//         {/* Miro  */}
//         <motion.div
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4"
//           data-tooltip-id="tech-tooltip"
//           data-tooltip-content="Miro"
//         >
//           <SiMiro className={`${responsiveIconClass} text-zinc-800`} />
//         </motion.div>
//       </motion.div>

//       <Tooltip
//         id="tech-tooltip"
//         style={{
//           backgroundColor: "#fffff",
//           color: "#c084fc",
//           fontWeight: "bold",
//           fontSize: "14px",
//           borderRadius: "8px",
//           padding: "8px 12px",
//           border: "1px solid #fbcfe8",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
//         }}
//       />
//     </div>
//   );
// };

// export default Technologies;

import { useEffect } from "react";
import { BiData } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiEclipse, DiMysql } from "react-icons/di";
import { FaPython, FaJava, FaGithubSquare, FaGitAlt } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiPhp,
  SiJavascript,
  SiSelenium,
  SiJira,
  SiApachemaven,
  SiPostman,
  SiFilezilla,
  SiLaragon,
  SiOracle,
  SiGooglecolab,
  SiMiro,
} from "react-icons/si";
import {
  PiMicrosoftWordLogoDuotone,
  PiMicrosoftExcelLogoDuotone,
  PiMicrosoftPowerpointLogoDuotone,
  PiMicrosoftOutlookLogoDuotone,
  PiMicrosoftTeamsLogoDuotone,
} from "react-icons/pi";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
  const responsiveIconClass = "text-5xl sm:text-5xl md:text-6xl";

  useEffect(() => {
    setTimeout(() => {
      Tooltip.rebuild();
    }, 0);
  }, []);

  const icons = [
    { Icon: BiData, color: "text-slate-500", label: "Database", duration: 2.5 },
    { Icon: SiLaragon, color: "text-sky-500", label: "Laragon", duration: 2.5 },
    { Icon: DiMysql, color: "text-blue-900", label: "MySQL", duration: 2.5 },
    {
      Icon: SiOracle,
      color: "text-red-600",
      label: "Oracle SQL",
      duration: 2.5,
    },
    {
      Icon: FaGithubSquare,
      color: "text-white-100",
      label: "Github",
      duration: 2.5,
    },
    { Icon: FaGitAlt, color: "text-orange-700", label: "Git", duration: 2.5 },
    {
      Icon: VscVscodeInsiders,
      color: "text-sky-600",
      label: "VSCode",
      duration: 3,
    },
    {
      Icon: SiGooglecolab,
      color: "text-orange-600",
      label: "Google Colab",
      duration: 3,
    },

    { Icon: AiFillHtml5, color: "text-orange-700", label: "HTML", duration: 5 },
    { Icon: DiCss3, color: "text-blue-500", label: "CSS", duration: 4 },
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      label: "Javascript",
      duration: 6,
    },
    { Icon: SiPhp, color: "text-sky-800", label: "PHP", duration: 2 },
    { Icon: FaPython, color: "text-blue-800", label: "Python", duration: 2.5 },
    { Icon: FaJava, color: "text-blue-600", label: "Java", duration: 3 },
    { Icon: SiJira, color: "text-blue-700", label: "Jira", duration: 2 },
    {
      Icon: SiPostman,
      color: "text-orange-600",
      label: "Postman",
      duration: 2.5,
    },
    {
      Icon: SiFilezilla,
      color: "text-red-800",
      label: "Filezilla",
      duration: 2.5,
    },

    { Icon: DiEclipse, color: "text-blue-900", label: "Eclipse", duration: 6 },
    {
      Icon: SiSelenium,
      color: "text-gray-400",
      label: "Selenium",
      duration: 5,
    },
    {
      Icon: SiApachemaven,
      color: "text-orange-700",
      label: "Maven",
      duration: 4,
    },
    {
      Icon: PiMicrosoftWordLogoDuotone,
      color: "text-blue-600",
      label: "Microsoft Word",
      duration: 3,
    },
    {
      Icon: PiMicrosoftExcelLogoDuotone,
      color: "text-green-600",
      label: "Microsoft Excel",
      duration: 5,
    },
    {
      Icon: PiMicrosoftPowerpointLogoDuotone,
      color: "text-orange-700",
      label: "Microsoft PowerPoint",
      duration: 4,
    },
    {
      Icon: PiMicrosoftOutlookLogoDuotone,
      color: "text-blue-600",
      label: "Microsoft Outlook",
      duration: 3,
    },
    {
      Icon: PiMicrosoftTeamsLogoDuotone,
      color: "text-indigo-600",
      label: "Microsoft Teams",
      duration: 5,
    },
    {
      Icon: SiMiro,
      color: "text-zinc-800",
      label: "Miro",
      duration: 5,
    },
  ];

  const rows = [
    icons.slice(0, 6),
    icons.slice(6, 14),
    icons.slice(14, 20),
    icons.slice(20, 26),
  ];

  return (
    <div id="technologies" className="border-b border-neutral-900 pt-20 pb-40">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-6 mb-6 flex-wrap"
        >
          {row.map(({ Icon, color, label, duration }) => (
            <motion.div
              key={label}
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
              data-tooltip-id="tech-tooltip"
              data-tooltip-content={label}
            >
              <Icon className={`${responsiveIconClass} ${color}`} />
            </motion.div>
          ))}
        </div>
      ))}

      <Tooltip
        id="tech-tooltip"
        className=" border-neutral-800"
        style={{
          backgroundColor: "#fffff",
          color: "#c084fc",
          fontWeight: "bold",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "8px 12px",
          border: "1px solid #fbcfe8",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
};

export default Technologies;
