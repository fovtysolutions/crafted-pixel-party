
import React from "react";

const UserTypes: React.FC = () => {
  const userTypes = [
    {
      title: "Startups & Entrepreneurs",
      description: "Pitch your idea, get feedback, and connect with investors to turn dreams into ventures.",
      icon: "🚀"
    },
    {
      title: "Established Business",
      description: "Find verified suppliers, wholesalers, manufacturers, and service providers to scale your operations.",
      icon: "🏢"
    },
    {
      title: "Investors",
      description: "Discover high-potential startups, explore unique pitch decks, and invest smartly – all in one place.",
      icon: "💰"
    },
    {
      title: "Content Creators",
      description: "Educate, engage, and grow with a professional audience by posting business-related content.",
      icon: "✍️"
    },
    {
      title: "B2B Sellers & Suppliers",
      description: "Connect with verified B2B buyers and scale your business by showcasing your products to the right network.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-white text-center mb-4">
          Who Is <span className="text-[#9B87F5]">Bizlaxy</span> For?
        </h2>
        <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-16">
          Bizlaxy is where business meets opportunity. Connect, grow, and thrive
          in a network built for startups, investors, and innovators alike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <div
              key={index}
              className="bg-[rgba(23,23,23,0.4)] border border-[rgba(58,58,58,1)] rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-medium text-white mb-3">{type.title}</h3>
              <p className="text-white/70">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
