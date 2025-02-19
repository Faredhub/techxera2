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
  title: {
    name: "Title Sponsors",
    logos: [
      "https://images.unsplash.com/photo-1642784353782-91bfdd65920c?w=200&h=100&fit=crop",
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    ],
  },
  platinum: {
    name: "Platinum Sponsors",
    logos: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=100&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=100&fit=crop",
    ],
  },
  gold: {
    name: "Gold Sponsors",
    logos: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=100&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop",
    ],
  },
};

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  const text = "Coming Soon...";

  return (
    <motion.section
      className={`py-16 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-blue-900 opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className={`text-4xl font-extrabold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          OUR OFFICIAL PARTNERS
        </motion.h2>

        {Object.entries(sponsors).map(([key, category], categoryIndex) => (
          <motion.div
            key={key}
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            {/* Sponsor Category Title */}
            <h3
              className={`text-2xl font-semibold text-center mb-8 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {category.name}
            </h3>

            {/* Sponsor Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {category.logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Neon Glow Border on Hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: "2px solid transparent",
                      background:
                        "linear-gradient(145deg, black, black) padding-box, linear-gradient(145deg, #00ff7f, #0044cc) border-box",
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Frosted Glass Background */}
                  <div className="relative z-10 flex items-center justify-center p-6 rounded-xl bg-black bg-opacity-40 group-hover:bg-opacity-10 backdrop-blur-md transition-all duration-500 shadow-lg">
                    <motion.img
                      src={logo}
                      alt={`${category.name} sponsor ${index + 1}`}
                      className="max-h-20 object-contain filter dark:brightness-90"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* "Coming Soon" Animated Text */}
      <p className="text-3xl text-center text-gray-200 poppins-regular max-w-3xl mx-auto leading-relaxed mt-16">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.05, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </motion.section>
  );
};

export default Sponsors;
