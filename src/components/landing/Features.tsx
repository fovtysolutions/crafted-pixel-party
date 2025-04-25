import React from "react";

interface Feature {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const features: Feature[] = [
  {
    tag: "COMPANY PROFILE",
    title: "Verified Brands.",
    subtitle: "Build trust with a strong company presence.",
    description:
      "Showcase your company's identity, mission, team, and achievements through a credible and visually appealing profile. Attract the right stakeholders from investors and partners to top tier talent by reinforcing your legitimacy and growth story.",
    image: "/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png",
    imagePosition: "right"
  },
  {
    tag: "INVESTOR",
    title: "Smart Investments.",
    subtitle: "Discover and support the next big thing.",
    description:
      "Gain access to a curated pipeline of high potential startups, and manage your portfolio with real time analytics and performance tracking. Whether you're looking for early stage disruptors or growth stage game changers, our investor tools help you make data informed decisions that amplify your impact in the venture ecosystem.",
    image: "/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png",
    imagePosition: "left"
  },
  {
    tag: "MARKETPLACE",
    title: "Powering Startup Deals.",
    subtitle: "Buy, sell, and grow with confidence.",
    description:
      "Access a curated marketplace built for startups whether you're searching for tools, services, or equity opportunities. From growth software to legal support, everything is designed to fuel your next milestone and make deals frictionless and founder friendly.",
    image: "/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png",
    imagePosition: "right"
  },
  {
    tag: "STARTUP",
    title: "Start Something Great.",
    subtitle: "Launch, build, and grow your vision.",
    description:
      "Bring your ideas to life with powerful tools designed for Collaborate with professionals, join events, and present your vision to the world. Whether you're launching or scaling, Bizlaxy is your growth companion.",
    image: "/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png",
    imagePosition: "left"
  },
  {
    tag: "PITCH DECKS",
    title: "Tell Your Story.",
    subtitle: "Impress investors with powerful presentations.",
    description:
      "Upload your pitch decks and turn them into dynamic, interactive experiences. Highlight key metrics, founder vision, and growth potential with visual storytelling that resonates.",
    image: "/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png",
    imagePosition: "right"
  },
  {
    tag: "EVENTS",
    title: "Where Visionaries Meet.",
    subtitle: "Explore startup summits, networking & demo days.",
    description:
      "Connect with the innovation ecosystem at top industry events—from startup expos to investor meetups. Host, join, or showcase your company to gain visibility, build partnerships, and stay plugged into emerging trends shaping the future of tech.",
    image: "/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png",
    imagePosition: "left"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-center text-white mb-4">
          Discover The <span className="text-[#9B87F5]">Galaxy of Features</span>
        </h2>
        <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-16">
          Our platform is packed with powerful tools to help you connect, engage,
          and grow your professional network.
        </p>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {feature.imagePosition === "left" && (
                <div className="w-full md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-lg"
                  />
                </div>
              )}
              <div className="w-full md:w-1/2">
                <div className="text-sm font-medium text-[#9B87F5] mb-2">
                  {feature.tag}
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <h4 className="text-xl text-white/90 mb-4">{feature.subtitle}</h4>
                <p className="text-white/70">{feature.description}</p>
              </div>
              {feature.imagePosition === "right" && (
                <div className="w-full md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
