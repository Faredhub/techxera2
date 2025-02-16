import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode = true }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">TECHXERA</h3>
            <p className="text-gray-400">
              Innovating the future through technology
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" whileHover={{ scale: 1.2 }}><Facebook size={20} /></motion.a>
              <motion.a href="https://x.com/techxera_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" whileHover={{ scale: 1.2 }}><Twitter size={20} /></motion.a>
              <motion.a href="https://www.instagram.com/techxera._nit/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" whileHover={{ scale: 1.2 }}><Instagram size={20} /></motion.a>
              <motion.a href="https://www.linkedin.com/company/techxera-nalanda/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" whileHover={{ scale: 1.2 }}><Linkedin size={20} /></motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation("/initiatives")} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavigation("/competitions")} className="text-gray-400 hover:text-white transition-colors">Competitions</button></li>
              <li><button onClick={() => handleNavigation("/workshops")} className="text-gray-400 hover:text-white transition-colors">Workshops</button></li>
              <li><button onClick={() => handleNavigation("/events")} className="text-gray-400 hover:text-white transition-colors">Events</button></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span>techxeraclub@thenalanda.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <span>+91 7815014638</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Nalanda Institute of Technology, Chandaka, Bhubaneswar</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
              />
              <motion.button 
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© 2023 TechXera. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
