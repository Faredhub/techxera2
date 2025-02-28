import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Code,
  Cpu,
  Palette,
  Bot,
  MemoryStick,
  MessageCircleQuestion,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFilePdf } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import party from "party-js";

const competitions = [
  {
    title: "CODEXERA",
    description:
      "Build innovative solutions using artificial intelligence and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    prize: " 300Rs",
    icon: <Code className="w-8 h-8 text-blue-400 group-hover:text-blue-500" />,
    category: "Advanced",
    whatsAppGropu: "https://chat.whatsapp.com/G0VSDBbn7XJIj4P3I6HMcw",
    pdf: "https://drive.google.com/file/d/1a_bRrtMr0hzkJgWXFImkM5jkuhjemKl7/view?usp=drive_link",
  },
  {
    title: "INNOXERA",
    description:
      "Test your programming skills with challenging algorithmic problems.",
    image:
      "https://cdn-fjald.nitrocdn.com/KFzmISOEYBnVYfzMObuWupjEoUkmSGKh/assets/images/optimized/rev-dc842e8/sabpaisa.in/wp-content/uploads/2023/10/Application-of-IoT-banner.png",
    prize: "300 Rs",
    icon: <Cpu className="w-8 h-8 text-green-400 group-hover:text-green-500" />,
    category: "Expert",
    whatsAppGropu: "https://chat.whatsapp.com/CFIrs1VQ72r3fnKCc5aQeB",
    pdf: "https://drive.google.com/file/d/1weJ1ySIzDIm-Y-lZsZEs_o6e_htPyaxa/view?usp=drive_link",
  },
  {
    title: "TechBizNexus",
    description:
      "Create smart solutions using Internet of Things technologies.",
    image:
      "https://i.pinimg.com/736x/91/c9/fe/91c9fe894c22dfe20d272ffd73db8225.jpg",
    prize: "300 Rs",
    icon: (
      <MessageCircleQuestion className="w-8 h-8 text-yellow-400 group-hover:text-yellow-500" />
    ),
    category: "Technical",
    whatsAppGropu: "https://chat.whatsapp.com/GYd0ZkpD1HpFAjAl9ikcoO",
    pdf: "https://drive.google.com/file/d/16rabtsVNtCsmpVbrs1jjXqhosKbTJQpj/view?usp=drive_link",
  },
];

const Competitions = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse Move Effect
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const popperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      party.confetti(popperRef.current, {
        count: 15,
      });
    }, 1000); // Adjust timing for effect frequency

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-black via-darkblue to-darkgreen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Neon Light Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 170, 0.2), transparent 50%)`,
          transition: "0.1s ease-out",
        }}
      />

      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-0"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 mt-4 text-center bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
          >
            Tech <span className="text-green-400">Competitions</span>
          </motion.h1>
          <marquee behavior="scroll" direction="left" scrollamount="7">
            <div className="w-fit" ref={popperRef}>
              <p className="p-3 nunito text-[20px] text-white">
                Prizepool worths 30,000/- & different goodies
              </p>
            </div>
          </marquee>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg transition-all duration-300 hover:shadow-neon"
              >
                <div className="relative p-5 h-48 overflow-hidden rounded-lg">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 text-white">
                  <div className="mb-4">{competition.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">
                    {competition.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {competition.description}
                  </p>
                  <motion.div>
                    <Link to={"/register"}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-lg">
                        Register Now
                      </Button>
                    </Link>
                    <div className="flex mt-4 justify-between">
                      <a
                        href={competition.pdf}
                        target="_blank"
                        className="pdf flex items-center gap-1 flex-col"
                      >
                        <FaFilePdf size={32} color="#fc4242" />
                        <span className="text-[10px] md:text-[13px] text-center poppins-regular">
                          Problem statement
                        </span>
                      </a>
                      <a
                        href={competition.whatsAppGropu}
                        target="_blank"
                        className="whatsapp flex items-center gap-1 flex-col"
                      >
                        <FaWhatsapp color="green" size={32} />
                        <span className="text-[10px] md:text-[13px] text-center poppins-regular">
                          Join WhatsApp group
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Competitions;
