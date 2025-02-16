import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sponsors from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <Sponsors darkMode={true} />
      <Team />
      <Footer />
      
    </div>
  );
};

export default Index;