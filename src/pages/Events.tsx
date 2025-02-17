import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Events = () => {
  const events = [
    {
      title: "Robowars",
      description: "Battle of the mechanical titans",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      date: "March 15, 2024",
      category: "Competition"
    },
    {
      title: "Hackathon",
      description: "24-hour coding challenge",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      date: "March 16, 2024",
      category: "Competition"
    },
    {
      title: "AI Workshop",
      description: "Learn about artificial intelligence",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      date: "March 17, 2024",
      category: "Workshop"
    },
    {
      title: "Drone Racing",
      description: "High-speed drone competition",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
      date: "March 18, 2024",
      category: "Competition"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-gradient-y">
            Upcoming Events
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{event.date}</span>
                    <Button 
                      className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now.
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;