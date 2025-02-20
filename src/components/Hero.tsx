import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const text = "- Merging Ideas to create stellar tech";
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Tech Background"
          className="w-full h-full object-cover object-right opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10 mt-16">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl drop-shadow-neon josefin-sans mb-8 text-white animate-gradient-y"
        >
          <span className="text-[46px] md:text-[66px]">Synthara 1.0</span> <br />{" "}
          <span className="text-[40px] md:text-[55px]">2025</span>
        </motion.h1>
        <motion.p className="text-xl md:text-2xl poppins-regular mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
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
        </motion.p>
        <div className="flex items-center gap-4 justify-center">
          <Link to={"/register"}>
            <Button className="bg-primary hover:bg-primary/90 md:px-4 md:py-3 text-lg">
              Register Now
            </Button>
          </Link>
          <Link to={"/events"}>
            <Button
              variant="outline"
              className="text-lg md:px-4 md:py-6  border-2"
            >
              Explore Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;