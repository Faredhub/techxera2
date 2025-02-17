import chinmayImg from "@/assets/chinmay.jpg";
import biswanathImg from "@/assets/biswanath.jpg";
import subrajitImg from "@/assets/subrajit.jpg";
import { Button } from "./ui/button";

const teamMembers = [
  {
    name: "Chinmay Kumar Panda",
    role: "President TECHXERA",
    image: chinmayImg,
  },
  {
    name: "Biswanath Prasanna Satyabrata Kar",
    role: "Technical Head",
    image: biswanathImg,
  },
  {
    name: "Subrajit Jena",
    role: "Vice President",
    image: subrajitImg,
  },
];

const Team = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg text-center hover:transform hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-3">
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
