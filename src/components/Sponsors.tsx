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

// Using the correct public path for the image
const sponsorLogo = "/Untitled_design-removebg-preview.png";

const Sponsors: React.FC<SponsorsProps> = ({ darkMode }) => {
  const text = "Coming soon...";

  return (
    <motion.section
      className={`py-16 transition-colors duration-300 relative ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          OUR OFFICIAL PARTNERS
        </motion.h2>

        {/* Sponsor Highlight Image */}
        <motion.div
          className="flex justify-center mb-12 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={sponsorLogo}
            alt="Main Sponsor Logo"
            className="w-48 md:w-60 lg:w-72 object-contain rounded-lg shadow-xl border-4 border-transparent"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.5)",
              borderImage: "linear-gradient(45deg, #ff9800, #ff5722) 1",
            }}
          />
        </motion.div>

        {/* Animated "Coming Soon" Text */}
        <p className="text-3xl text-center md:text-2xl poppins-regular mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.05, delay: index * 0.1 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>
    </motion.section>
  );
};

export default Sponsors;
