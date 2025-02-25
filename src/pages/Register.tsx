import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  // const { toast } = useToast();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   college: "",
  //   phone: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Registration Successful!",
  //     description: "Thank you for registering for Techfest 2025.",
  //   });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
            className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 via-green-400 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
          >
            Register Now
          </motion.h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Join us at Nalanda's Largest Technology Festival
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 py-6 px-1 md:py-12 md:px-12"
          >
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-white">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-white">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-white">College/University</label>
                  <Input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-white">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 text-white"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-green-500 hover:shadow-[0px_0px_20px_#0d7377] hover:from-green-500 hover:to-blue-700 transition-all duration-300 py-6 text-lg"
              >
                Register for Techfest 2025
              </Button>
            </form> */}

            {/*----------goole form link connect-----------*/}

            <a
              className="w-[100%] trans flex justify-center items-center active:scale-110 bg-gradient-to-r from-violet-800 to-purple-500 md:w-[80%] h-[60px] rounded-2xl text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_#0d7377] hover:from-blue-700 hover:to-green-500"
              href="https://forms.gle/XUnpDWsRcf61XuvVA"
            >
              FOR NALANDA STUDENT'S
            </a>

            <a
              className="w-[100%] trans flex justify-center items-center active:scale-110 bg-gradient-to-r from-gray-900 to-teal-900 md:w-[80%] h-[60px] rounded-2xl text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_#0d7377] hover:from-blue-700 hover:to-green-500"
              href="https://forms.gle/AbfxreY57ERoWfK19"
            >
              FOR OTHER COLLEGE STUDENT'S
            </a>

            <a
              className="w-[100%] trans flex justify-center items-center active:scale-110 bg-gradient-to-r from-gray-900 to-blue-800 md:w-[80%] h-[60px] rounded-2xl text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_#0d7377] hover:from-blue-700 hover:to-green-500"
              href="https://forms.gle/G1qRDAxtbkuh6rqe8"
            >
              FOR TECHXERA MEMBER'S
            </a>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Register;
