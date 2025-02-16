import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    title: "Green Technology",
    description: "Promoting sustainable technology solutions for a better future.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Sustainability",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Tech for Good",
    description: "Using technology to solve social and environmental challenges.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Social Impact",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Innovation Lab",
    description: "Fostering innovation and research in emerging technologies.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Research",
    icon: <Lightbulb className="w-8 h-8" />
  }
];

const Initiatives = () => {
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
            About Us
          </motion.h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Driving technological innovation for social impact
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-full">
                    {initiative.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 text-primary">{initiative.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-gray-400 mb-4">{initiative.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Learn More
                  </Button>
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

export default Initiatives;