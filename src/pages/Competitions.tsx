import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Brain,
  Code,
  Palette,
  Cpu,
  Bot,
  MemoryStick,
  MessageCircleQuestion,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFilePdf } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const competitions = [
  {
    title: "CODEXERA",
    description:
      "Build innovative solutions using artificial intelligence and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    prize: " 300Rs",
    icon: <Code className="w-8 h-8" />,
    category: "Advanced",
    whatsAppGropu: "https://chat.whatsapp.com/G0VSDBbn7XJIj4P3I6HMcw",
    pdf: "https://drive.google.com/file/d/118-CWnwOQ9AHmwcaT0YqZp-QU2zlvu7F/view?usp=drive_link",
  },
  {
    title: "INNOXERA",
    description:
      "Test your programming skills with challenging algorithmic problems.",
    image:
      "https://cdn-fjald.nitrocdn.com/KFzmISOEYBnVYfzMObuWupjEoUkmSGKh/assets/images/optimized/rev-dc842e8/sabpaisa.in/wp-content/uploads/2023/10/Application-of-IoT-banner.png",
    prize: "300 Rs",
    icon: <MemoryStick className="w-8 h-8" />,
    category: "Expert",
    whatsAppGropu: "https://chat.whatsapp.com/CFIrs1VQ72r3fnKCc5aQeB",
    pdf: "https://drive.google.com/file/d/1159bGwQ2TrwtrFwCyfOapXiuvoy_KJEx/view?usp=drive_link",
  },
  {
    title: "GENXERA",
    description:
      "Design intuitive and beautiful user interfaces for next-gen applications.",
    image:
      "https://i.pinimg.com/736x/31/f0/c6/31f0c659103b87187718ac705a138cbc.jpg",
    prize: "300 Rs",
    icon: <Bot className="w-8 h-8" />,
    category: "Creative",
    whatsAppGropu: "https://chat.whatsapp.com/FP9WTob6IehG34KHcoM6Kw",
    pdf: "https://drive.google.com/file/d/10xPZVn7spCTq1T1ovabvN2V7w0YpWSOu/view?usp=drive_link",
  },
  {
    title: "TechBizNexus",
    description:
      "Create smart solutions using Internet of Things technologies.",
    image:
      "https://i.pinimg.com/736x/91/c9/fe/91c9fe894c22dfe20d272ffd73db8225.jpg",
    prize: "300 Rs",
    icon: <MessageCircleQuestion className="w-8 h-8" />,
    category: "Technical",
    whatsAppGropu: "https://chat.whatsapp.com/GYd0ZkpD1HpFAjAl9ikcoO",
    pdf: "https://drive.google.com/file/d/113v8JgEgPcVVAGy4SKUJcshHb6nmqOBC/view?usp=drive_link",
  },
];

const Competitions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-center animate-gradient-y"
          >
            Tech Competitions
          </motion.h1>
          <marquee behavior="scroll" direction="left" scrollamount="7">
            <p className="p-3 nunito text-[20px]">
              Prizepool worths 30,000/- & different goodies
            </p>
          </marquee>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 text-primary">{competition.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {competition.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {competition.description}
                  </p>
                  <motion.div
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.95 }}
                  >
                    <Link to={"/register"}>
                      <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                        Register Now
                      </Button>
                    </Link>
                    <div className="flex mt-4 justify-between">
                      <a
                        href={competition.pdf}
                        className="pdf flex items-center gap-1 flex-col"
                      >
                        <FaFilePdf
                          size={32}
                          color="#fc4242"
                        />
                        <a
                          href={competition.pdf}
                          className="text-[10px] md:text-[13px] text-center poppins-regular"
                        >
                          Problem statement
                        </a>
                      </a>
                      <a
                        href={competition.whatsAppGropu}
                        className="whatsapp flex items-center gap-1 flex-col"
                      >
                        <FaWhatsapp
                          color="green"
                          size={32}
                        />
                        <a
                          href={competition.whatsAppGropu}
                          className="text-[10px] md:text-[13px] text-center poppins-regular"
                        >
                          Join WhatsApp group
                        </a>
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
