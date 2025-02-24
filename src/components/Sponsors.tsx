import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SponsorsProps {
  darkMode: boolean;
}

interface SponsorCategory {
  name: string;
  logos: string[];
}

const knowledgePartner = [
  {
    sponserTitle: "Coding partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
];
const incubationPartner = [
  {
    sponserTitle: "Incubation partner",
    sponserImage: "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
];
const sponsors = [
  {
    sponserTitle: "Sponser",
    sponserImage:"/public/baroda.png",
  },
];

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  return (
    <motion.section
      className={`py-16 px-4 transition-colors overflow-hidden duration-300 relative ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Enhanced Heading with Blue-to-Green Gradient */}
        <motion.h2
          className="text-3xl md:text-4xl text-center font-bold text-primary mb-12 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR OFFICIAL PARTNERS
        </motion.h2>

        {/* Sponsor Logo Section - Adjusted Size */}
        <h2 className="text-xl text-gray-500 nunito">Incubation Partners :</h2>
        <motion.div
          className="flex w-max gap-10 mt-5 items-center mb-12 relative"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        >
          {incubationPartner.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-[160px] md:w-[250px]">
                <img src={sponsor.sponserImage} className="w-full" alt="" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="text-xl text-gray-500 nunito">Knowledge Partners :</h2>
        <motion.div
          className="flex w-max gap-10 mt-5 items-center mb-12 relative"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        >
          {knowledgePartner.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-[160px] md:w-[250px]">
                <img src={sponsor.sponserImage} className="w-full" alt="" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <h2 className="text-xl text-gray-500 nunito">Sponsored by :</h2>
        <motion.div
          className="flex w-max gap-10 mt-5 items-center mb-12 relative"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-[160px] md:w-[250px]">
                <img src={sponsor.sponserImage} className="w-full" alt="" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
