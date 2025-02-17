import React, { useEffect, useRef } from "react";
import { Trophy, Users, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { MdOutlineGroups } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";

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
    title: "Our Aim",
    description: "Our mission is to empower the next generation of tech leaders by creating an inclusive environment that nurtures talent and drives innovation. We believe that through shared knowledge and collective effort, we can transform ideas into impactful solutions. Whether you’re just beginning your tech journey or are an experienced professional, Techxera is dedicated to helping you grow and succeed",
  },
  {
    icon: <CalendarHeart className="w-8 h-8" />,
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let start = 0;
    const step = () => {
      start -= 1;
      if (start <= -container.scrollWidth) {
        start = container.clientWidth;
      }
      container.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <section className="py-20 px-4 bg-black overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          What's at Techfest?
        </h2>
        <div
          className="flex space-x-8"
          ref={containerRef}
          style={{ whiteSpace: "nowrap" }}
        >
          {aboutUsData.map((feature, index) => (
            <Link
              to="/about"
              key={index}
              className="glass-card p-8 rounded-lg text-center hover:transform hover:scale-105 transition-transform inline-block"
              style={{ minWidth: "300px" }}
            >
              <div className="mb-6 text-primary inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;