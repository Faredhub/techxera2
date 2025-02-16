import { Trophy, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Competitions",
    description: "Participate in cutting-edge technology competitions with prizes worth millions.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Workshops",
    description: "Learn from industry experts in hands-on workshops and technical sessions.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Experience the latest in technology, robotics, and artificial intelligence.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          What's at Techfest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg text-center hover:transform hover:scale-105 transition-transform"
            >
              <div className="mb-6 text-primary inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;