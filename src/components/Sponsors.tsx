import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface SponsorsProps {
  darkMode: boolean;
}

const Partners = [
  {
    sponserTitle: "Incubation Partner",
    sponserImage: "https://www.aicnalanda.com/public/img/aicnewlogo.png",
  },
  {
    sponserTitle: "Workshop Partner",
    sponserImage: "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
  // {
  //   sponserTitle: "Tech Partner",
  //   sponserImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  // },
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
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) {
      controls.start({
        x: ["0%", "-100%"],
        transition: { repeat: Infinity, ease: "linear", duration: 15 },
      });
    }
  }, [isDragging, controls]);

  const handleDragEnd = () => {
    setIsDragging(false);
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, ease: "linear", duration: 15 },
    });
  };

  return (
    <motion.section
      className={`py-16 overflow-hidden relative transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-600  to-teal-400 bg-clip-text text-transparent">
            OUR OFFICIAL 
          </span>{" "}
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
            PARTNERS
          </span>
        </motion.h2>
      </div>

      {/* Partner Logos Slider */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          ref={sliderRef}
          className="flex gap-12 w-max mt-5 items-center"
          drag="x"
          dragConstraints={{ left: -500, right: 0 }}
          animate={controls}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {[...Partners, ...Partners].map((sponsor, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <div className="w-[150px] md:w-[200px]">
                <img src={sponsor.sponserImage} className="w-full" alt={sponsor.sponserTitle} />
              </div>
              <h3 className="text-[18px] md:text-[20px] text-indigo-600">{sponsor.sponserTitle}</h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sponsor Section */}
      <div className="text-center mt-12">
        <h2 className="text-lg px-4 font-extralight bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
          Sponsored by:
        </h2>
        <motion.div className="flex justify-center">
          <motion.div
            className="flex gap-10 items-center mt-5 relative overflow-hidden"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
            animate={controls}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            {sponsors.map((sponsor, index) => (
              <div key={index} className="w-[150px] md:w-[200px]">
                <img src={sponsor.sponserImage} className="w-full" alt={sponsor.sponserTitle} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
