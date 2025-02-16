import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Brain, Code, Palette, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const competitions = [
  {
    title: "AI/ML Challenge",
    description: "Build innovative solutions using artificial intelligence and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    prize: " 1 Rs",
    icon: <Brain className="w-8 h-8" />,
    category: "Advanced"
  },
  {
    title: "Competitive Coding",
    description: "Test your programming skills with challenging algorithmic problems.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    prize: ".1 Rs",
    icon: <Code className="w-8 h-8" />,
    category: "Expert"
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user interfaces for next-gen applications.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    prize: "0 Rs",
    icon: <Palette className="w-8 h-8" />,
    category: "Creative"
  },
  {
    title: "IoT Innovation",
    description: "Create smart solutions using Internet of Things technologies.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    prize: "1 Rs",
    icon: <Cpu className="w-8 h-8" />,
    category: "Technical"
  },
  {
    title: "Cybersecurity",
    description: "Tackle real-world security challenges and protect digital assets.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    prize: "0 Rs",
    icon: <Shield className="w-8 h-8" />,
    category: "Security"
  }
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
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          >
            Showcase your skills and compete for prizes worth over 3 Rs
          </motion.p>
          
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
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Prize: {competition.prize}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {competition.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 text-primary">{competition.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{competition.title}</h3>
                  <p className="text-gray-400 mb-6">{competition.description}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                      Register Now
                    </Button>
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