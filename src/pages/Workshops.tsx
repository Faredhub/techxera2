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
      
      <div className="w-[100%] bg-white md:w-[50%]">
              <img className="w-[100%]" src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?t=st=1739791769~exp=1739795369~hmac=254627954821e6694f56a99775ac93cf3c702b5817eec8b323cc6c00670edc82&w=740" alt="" />
            </div>
     
    </div>
  );
};

export default Workshops;