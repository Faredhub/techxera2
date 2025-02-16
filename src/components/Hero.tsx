import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Tech Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10 mt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-gradient-y">
          TECHFEST 2025
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Bhubaneswar's Largest  Technology Festival
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Register Now
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6 border-2">
            Explore Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;