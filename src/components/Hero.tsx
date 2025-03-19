import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const text = "- Merging Ideas to create stellar tech";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (Math.random() < 0.1) {
        // 10% chance to create a floating "0" or "1" (slightly increased)
        const newParticle = { id: Math.random(), x: e.clientX, y: e.clientY };
        setParticles((prev) => [...prev, newParticle]);

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1000); // Increased duration for visibility
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with More Visibility */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Tech Background"
          className="w-full h-full object-cover object-right opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Floating Binary Particles (Increased Frequency) */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute text-green-400 text-lg font-bold"
          style={{ left: particle.x, top: particle.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1 }}
        >
          {Math.random() > 0.5 ? "0" : "1"}
        </motion.span>
      ))}

      {/* Glowing Neon Cursor Directly Under Cursor */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-green-400 opacity-50 blur-lg"
        style={{
          left: mousePos.x - 20,
          top: mousePos.y - 20,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10 mt-16">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl drop-shadow-neon josefin-sans mb-8 
                     bg-gradient-to-r from-green-400 via-blue-400 to-green-400 text-transparent bg-clip-text"
        >
          <span className="bg-gradient-to-r from-teal-600  to-violet-300  bg-clip-text text-transparent">
          Synthara 1.0
          </span> <br />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
          2025
          </span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p className="text-xl md:text-2xl poppins-regular mb-12 
                            text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-300 to-green-300 
                            max-w-3xl mx-auto leading-relaxed">
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

        {/* Buttons */}
        <div className="flex items-center gap-6 justify-center">
          <Link to={"/register"}>
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 20px rgba(0, 255, 0, 0.8)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button className="bg-gradient-to-r from-green-500 to-green-400 
                                 hover:from-green-400 hover:to-green-300 
                                 md:px-6 md:py-3 text-lg transition-all">
                Register Now
              </Button>
              <motion.div
                className="absolute inset-0 border-2 border-green-400 opacity-0 
                           group-hover:opacity-100 transition-all"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              />
            </motion.div>
          </Link>

          <Link to={"/events"}>
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.8)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button variant="outline" className="text-lg md:px-6 md:py-3 border-2 border-blue-400 
                                                     text-transparent bg-clip-text 
                                                     bg-gradient-to-r from-blue-400 to-green-400">
                Explore Events
              </Button>
              <motion.div
                className="absolute inset-0 border-2 border-blue-400 opacity-0 
                           group-hover:opacity-100 transition-all"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
