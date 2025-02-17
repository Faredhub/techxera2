import { Trophy, Users, Lightbulb ,CalendarHeart} from "lucide-react";
import { Link } from "react-router-dom";

const aboutUsData = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Competitions",
    to:"/competitions",
    description:
      "Participate in cutting-edge technology competitions with prizes worth millions.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Workshops",
    to:"/workshops",
    description:
      "Learn from industry experts in hands-on workshops and technical sessions.",
  },
  {
    icon: <CalendarHeart className="w-8 h-8" />,
    title: "Events",
    to:"/events",
    description: "Experience the cultural events.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          What's at Techfest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutUsData.map((feature, index) => (
            <Link
              to={feature.to}
              key={index}
              className="glass-card p-8 rounded-lg text-center hover:transform hover:scale-105 transition-transform"
            >
              <div className="mb-6 text-primary inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
