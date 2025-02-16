import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    title: "AI & Machine Learning",
    description: "Deep dive into artificial intelligence and machine learning with industry experts. Learn about neural networks, deep learning, and practical applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    duration: "2 Days",
    date: "March 15-16, 2024",
    price: "299",
    icon: <Cpu className="w-8 h-8" />,
    seats: "50 seats available"
  },
  {
    title: "Web3 Development",
    description: "Learn blockchain development and build decentralized applications. Explore smart contracts, DeFi, and the future of web technology.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration: "3 Days",
    date: "March 20-22, 2024",
    price: "399",
    icon: <Code className="w-8 h-8" />,
    seats: "40 seats available"
  },
  {
    title: "IoT Workshop",
    description: "Hands-on experience with Internet of Things devices and programming. Build smart devices and learn about sensor integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    duration: "2 Days",
    date: "March 25-26, 2024",
    price: "349",
    icon: <BookOpen className="w-8 h-8" />,
    seats: "30 seats available"
  }
];

const Workshops = () => {
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
            Technical Workshops
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          >
            Learn from industry experts in hands-on technical sessions
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
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
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {workshop.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {workshop.seats}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 text-primary">{workshop.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-gray-400 mb-4">{workshop.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-semibold">{workshop.price}</span>
                    <span className="text-gray-400">{workshop.date}</span>
                  </div>
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

export default Workshops;