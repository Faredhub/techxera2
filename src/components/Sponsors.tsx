import React from "react";
import { motion } from "framer-motion";

interface SponsorsProps {
  darkMode: boolean;
}

interface SponsorCategory {
  name: string;
  logos: string[];
}

const sponsors: Record<string, SponsorCategory> = {
  // title: {
  //   name: "Title Sponsors",
  //   logos: [
  //     "https://images.unsplash.com/photo-1642784353782-91bfdd65920c?w=200&h=100&fit=crop",
  //     "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
  //   ],
  // },
  // platinum: {
  //   name: "Platinum Sponsors",
  //   logos: [
  //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
  //     "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=100&fit=crop",
  //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=100&fit=crop",
  //   ],
  // },
  // gold: {
  //   name: "Gold Sponsors",
  //   logos: [
  //     "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop",
  //     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop",
  //     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=100&fit=crop",
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop",
  //   ],
  // },
};

// Public folder image path
const sponsorLogo = "/Untitled_design-removebg-preview.png";

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  return (
    <motion.section
      className={`py-16 px-4 transition-colors duration-300 relative ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Heading with Blue-to-Green Gradient */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-green-400 to-green-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR OFFICIAL PARTNERS
        </motion.h2>

        {/* Sponsor Logo Section - Adjusted Size */}
        <motion.div
          className="flex justify-center items-center mb-12 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* White Background Card for Clarity */}
          <div className="absolute w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-white opacity-90 rounded-lg shadow-xl"></div>

          {/* Sponsor Image (Adjusted Size with Orange Glow) */}
          <motion.img
            src={sponsorLogo}
            alt="Main Sponsor Logo"
            className="relative w-48 md:w-60 lg:w-72 object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0px 0px 30px rgba(255, 165, 0, 0.7)", // Orange Glow Effect
            }}
          />
        </motion.div>

        {/* Previous Sponsors Section (Kept Intact) */}
        {Object.entries(sponsors).map(([key, category], categoryIndex) => (
          <motion.div
            key={key}
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3
              className={`text-xl font-semibold text-center mb-6 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {category.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {category.logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-center p-4 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  } transition-colors duration-300 shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.img
                    src={logo}
                    alt={`${category.name} sponsor ${index + 1}`}
                    className="max-h-20 object-contain filter dark:brightness-90"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Sponsors;
