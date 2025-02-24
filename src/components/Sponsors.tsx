import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface SponsorsProps {
  darkMode: boolean;
}

const Partners = [
  {
    sponserTitle: "Incubation partner",
    sponserImage:
      "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
  {
    sponserTitle: "workshop partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
  {
    sponserTitle: "Incubation partner",
    sponserImage:
      "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
  {
    sponserTitle: "workshop partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
  {
    sponserTitle: "Incubation partner",
    sponserImage:
      "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
  {
    sponserTitle: "workshop partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
  
];

const sponsors = [
  {
    sponserTitle: "Sponsor",
    sponserImage: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-logo.png",
  },
];

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      controls.start({ x: [300, -350], transition: { repeat: Infinity, ease: "linear", duration: 10 } });
    }
  }, [isDragging, controls]);

  return (
    <motion.section
      className={`py-16 px-0 transition-colors overflow-hidden duration-300 relative ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl text-center font-bold text-primary mb-12 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR OFFICIAL PARTNERS
        </motion.h2>

        <motion.div className="flex justify-center overflow-hidden">
          <motion.div
            className="flex gap-10 w-max mt-5 items-center mb-12 relative"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
            animate={controls}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {Partners.map((sponsor, index) => (
              <div key={index} className="flex flex-col gap-2 items-center">
                <div className="w-[150px] md:w-[200px]">
                  <img src={sponsor.sponserImage} className="w-full" alt="" />
                </div>
                <h3 className="text-[17px] md:text-[20px] nunito text-indigo-600 md:text-2xl">{sponsor.sponserTitle}</h3>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <h2 className="text-base px-4 text-gray-500 font-extralight">Sponsored by :</h2>
        <motion.div
          className="flex w-max gap-10 mt-0 items-center mb-12 relative overflow-hidden"
          drag="x"
          dragConstraints={{ left: -500, right: 0 }}
          animate={controls}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} className="">
              <div className="w-[150px] md:w-[200px]">
                <img src={sponsor.sponserImage} className="w-full" alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;