import { Trophy, Users, Lightbulb ,CalendarHeart} from "lucide-react";
import { Link } from "react-router-dom";
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
    description: "Our mission is to empower the next generation of tech leaders by creating an inclusive environment that nurtures talent and drives innovation. We believe that through shared knowledge and collective effort, we can transform ideas into impactful solutions. Whether you’re just beginning your tech journey or are an experienced professional, Techxera is dedicated to helping you grow and succeed",
  },
  {
    icon: <FcCollaboration className="w-8 h-8" />,
    title: "Our Collaboration",
    description: "We are proud to announce our collaboration with the 10x Club by Coding Ninjas. This partnership brings together brilliant minds and cutting-edge resources, offering enhanced opportunities for mentorship, skill development, and hands-on projects. Through this alliance, we aim to elevate the learning experience and expand the horizons for all our members.",
  },
  {
    icon: <CalendarHeart className="w-8 h-8" />,
    title: "Join Us",
    description: "Techxera is open to everyone with a passion for technology. If you’re ready to dive into a world of innovation, creativity, and collaboration, we invite you to join our community. Together, we can push the boundaries of what’s possible and create a future defined by technological excellence",
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
              to="/about"
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
