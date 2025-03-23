import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDrag } from "react-use-gesture";

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
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
  {
    sponserTitle: "Workshop Partner",
    sponserImage:
      "https://www.trickyenough.com/wp-content/uploads/2022/07/cn-logo-dark-9824-1.png",
  },
];

const sponsors = [
  {
    sponserTitle: "Sponsor",
    sponserImage:
      "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-logo.png",
  },
];

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, []);

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
          <span className="bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-transparent">
            OUR OFFICIAL
          </span>{" "}
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
            PARTNERS
          </span>
        </motion.h2>
      </div>

      {/* Partner Logos Slider */}
      <div className="relative flex justify-center overflow-hidden w-full">
        <motion.div className="mt-5 w-full flex cursor-grab">
          <motion.div
            ref={sliderRef}
            initial={{ x: 0 }}
            animate={{ x: ["30%", `-100%`] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="flex gap-12 justify-center"
          >
            {Partners.map((sponsor, index) => (
              <div key={index} className="gap-2 items-center">
                <div className="w-[170px] flex flex-col gap-3 items-center md:w-[230px]">
                  <img
                    src={sponsor.sponserImage}
                    className="w-full"
                    alt={sponsor.sponserTitle}
                  />
                  <h3 className="text-[17px] nunito md:text-[20px] text-indigo-600">
                    {sponsor.sponserTitle}
                  </h3>
                </div>
              </div>
            ))}
            <div key={index} className="gap-2 items-center">
                <div className="w-[220px] flex flex-col gap-3 items-center md:w-[230px]">
                  <img
                    src="https://i.ibb.co/sdwMfsYc/42ef8204-934c-4596-9366-197952db7b83-removalai-preview.png"
                    className="w-full"
                    alt="Training partner"
                  />
                  <h3 className="text-[17px] nunito md:text-[20px] text-indigo-600">
                    Training partner
                  </h3>
                </div>
              </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sponsor Section */}
      <div className="text-center mt-12">
        <h2 className="text-lg px-4 font-extralight bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
          Sponsored by:
        </h2>
        <motion.div ref={sliderRef} className="mt-1 w-full flex justify-center cursor-grab">
          <motion.div
            className="flex gap-12 justify-center"
          >
            {sponsors.map((sponsor, index) => (
              <div key={index} className="gap-2 items-center">
                <div className="w-[150px] flex flex-col gap-3 items-center md:w-[200px]">
                  <img
                    src={sponsor.sponserImage}
                    className="w-full"
                    alt={sponsor.sponserTitle}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
