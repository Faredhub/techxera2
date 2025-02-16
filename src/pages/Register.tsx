import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering for Techfest 2025.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="container max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-center animate-gradient-y"
          >
            Register Now
          </motion.h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Join us at Asia's Largest Science and Technology Festival
          </p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">College/University</label>
                  <Input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
              >
                Register for Techfest 2024
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Register;