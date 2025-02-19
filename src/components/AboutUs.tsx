import { Users, CalendarHeart } from "lucide-react";
import { MdOutlineGroups } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";

const aboutUsData = [
  {
    icon: <MdOutlineGroups className="w-8 h-8" />,
    title: "Who We Are",
    description:
      "Techxera is more than just a tech club; we are a collective of creative thinkers, problem-solvers, and tech enthusiasts committed to exploring the vast possibilities of technology. Founded by a group of dedicated innovators, our club serves as a platform for learning, collaboration, and hands-on experience in the ever-evolving tech landscape.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "What We Do",
    description:
      "At Techxera, we host a diverse range of events including workshops, hackathons, coding challenges, and interactive tech talks. Each event is designed to spark creativity, foster skill development, and encourage collaboration among members. Our activities provide practical exposure to cutting-edge technologies and innovative practices, preparing you to tackle real-world challenges.",
  },
  {
    icon: <CalendarHeart className="w-8 h-8" />,
    title: "Our Aim",
    description:
      "Our mission is to empower the next generation of tech leaders by creating an inclusive environment that nurtures talent and drives innovation. We believe that through shared knowledge and collective effort, we can transform ideas into impactful solutions. Whether you’re just beginning your tech journey or are an experienced professional, Techxera is dedicated to helping you grow and succeed.",
  },
  {
    icon: <FcCollaboration className="w-8 h-8" />,
    title: "Our Collaboration",
    description:
      "We are proud to announce our collaboration with the 10x Club by Coding Ninjas. This partnership brings together brilliant minds and cutting-edge resources, offering enhanced opportunities for mentorship, skill development, and hands-on projects. Through this alliance, we aim to elevate the learning experience and expand the horizons for all our members.",
  },
  {
    icon: <CalendarHeart className="w-8 h-8" />,
    title: "Join Us",
    description:
      "Techxera is open to everyone with a passion for technology. If you’re ready to dive into a world of innovation, creativity, and collaboration, we invite you to join our community. Together, we can push the boundaries of what’s possible and create a future defined by technological excellence.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-wide">
          About <span className="text-green-400">TECH</span>
          <span className="text-blue-500">XERA</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutUsData.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg text-center transition-transform transform hover:scale-105 group"
            >
              {/* Neon Border Effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-85 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: "2px solid transparent",
                  background:
                    "linear-gradient(145deg, black, black) padding-box, linear-gradient(145deg, #00ff7f, #0044cc) border-box",
                  filter: "blur(6px)",
                }}
              ></div>

              {/* iOS-Style Transparent Background on Hover */}
              <div className="relative z-10 p-8 bg-black bg-opacity-40 rounded-lg shadow-lg backdrop-blur-md transition-all duration-500 group-hover:bg-opacity-10">
                <div className="mb-6 inline-block text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-green-900 via-black to-blue-900 opacity-30"></div>
    </section>
  );
};

export default AboutUs;
