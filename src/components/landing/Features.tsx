import React from "react";
import FeatureCard from "./FeatureCard";

const Features: React.FC = () => {
  const features = [
    {
      tag: "COMPANY PROFILE",
      title: "Verified Brands.",
      subtitle: "Build trust with a strong company presence.",
      description:
        "Showcase your company's identity, mission, team, and achievements through a credible and visually appealing profile. Attract the right stakeholders from investors and partners to top tier talent by reinforcing your legitimacy and growth story. A strong company profile builds trust, drives visibility, and positions your brand to stand out across the startup ecosystem.",
      image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/9e1778c0b956ecfca7a7c89064f90c397cdaf3e6?placeholderIfAbsent=true",
      imagePosition: "right",
    },
    {
      tag: "INVESTOR",
      title: "Smart Investments.",
      subtitle: "Discover and support the next big thing.",
      description:
        "Gain access to a curated pipeline of high potential startups, and manage your portfolio with real time analytics and performance tracking. Whether you're looking for early stage disruptors or growth stage game changers, our investor tools help you make data informed decisions that amplify your impact in the venture ecosystem. Access verified, well-documented pitches and business plans. Find businesses aligned with your interests and funding goals.",
      image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/bc9762c07a7a464923564da517bcd85dceef3dc5?placeholderIfAbsent=true",
      imagePosition: "left",
    },
    {
      tag: "MARKETPLACE",
      title: "Powering Startup Deals.",
      subtitle: "Buy, sell, and grow with confidence.",
      description:
        "Access a curated marketplace built for startups whether you're searching for tools, services, or equity opportunities. From growth software to legal support, everything is designed to fuel your next milestone and make deals frictionless and founder friendly.",
      image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/fdb72c8fb7ff07f44c58defac197a066b69e2579?placeholderIfAbsent=true",
      imagePosition: "right",
    },
    {
      tag: "STARTUP",
      title: "Start Something Great.",
      subtitle: "Launch, build, and grow your vision.",
      description:
        "Bring your ideas to life with powerful tools designed for Collaborate with professionals, join events, and present your vision to the world. Whether you're launching or scaling, Bizlaxy is your growth companion. Showcase your product, team, and traction to attract funding, talent, and customers. From pitch decks to performance insights, we empower your startup to scale confidently in a competitive market.",
      image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ab4144bb8f9283ac9e6d92af528d536fa96bb110?placeholderIfAbsent=true",
      imagePosition: "left",
    },
    {
      tag: "PITCH DECKS",
      title: "Tell Your Story.",
      subtitle: "Impress investors with powerful presentations.",
      description:
        "Upload your pitch decks and turn them into dynamic, interactive experiences. Highlight key metrics, founder vision, and growth potential with visual storytelling that resonates. Make a strong impression with presentations that combine clarity, creativity, and credibility.",
      image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/64491fd212ac49cfd017e919a29c027f1db0f0f1?placeholderIfAbsent=true",
      imagePosition: "right",
    },
    {
      tag: "EVENTS",
      title: "Where Visionaries Meet.",
      subtitle: "Explore startup summits, networking & demo days.",
      description:
        "Connect with the innovation ecosystem at top industry events—from startup expos to investor meetups. Host, join, or showcase your company to gain visibility, build partnerships, and stay plugged into emerging trends shaping the future of tech.",
      image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/67addcc982c4484b6114e0c3e8ab141011e407f9?placeholderIfAbsent=true",
      imagePosition: "left",
    },
  ];

  return (
    <section className="features">
      <div className="text-white text-[46px] font-bold text-center mt-[54px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        <span
          style={{
            fontFamily: "Lexend, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 400,
            color: "rgba(255,255,255,1)",
          }}
        >
          Discover The
        </span>{" "}
        <span
          style={{
            fontFamily: "Lexend, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 400,
          }}
        >
          Galaxy of Features
        </span>
      </div>
      <div className="text-white text-base font-normal text-center mt-[11px] max-md:max-w-full">
        Our platform is packed with powerful tools to help you connect, engage,
        and grow your professional network.
      </div>

      <div className="flex flex-col items-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            tag={feature.tag}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            image={feature.image}
            imagePosition={feature.imagePosition}
          />
        ))}
      </div>

      {/* Collaboration section with special layout */}
      <div className="z-10 mt-[-460px] w-full max-w-[1342px] mx-auto max-md:max-w-full max-md:mt-[-200px] px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-4/5 max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-118px] items-center font-normal max-md:max-w-full">
              <div className="self-stretch flex min-w-60 w-[463px] flex-col my-auto rounded-[0px_0px_0px_0px]">
                <div className="text-xs bg-clip-text bg-[linear-gradient(91deg,#6D96FF_51.83%,#9645FF_78.82%)] ml-[34px] max-md:ml-2.5">
                  COLLABORATION
                </div>
                <div className="text-white text-[26px] font-semibold leading-7 mt-[11px]">
                  Build Together.
                  <span style={{ color: "rgba(255,255,255,1)" }}>
                    Partner with like-minded visionaries.
                  </span>
                </div>
                <div className="text-white text-sm self-stretch mt-5 max-md:max-w-full">
                  Form strategic partnerships through a connected platform that
                  encourages teamwork and aligned growth. Discover co-founders,
                  advisors, and collaborators who share your goals and
                  streamline communication through integrated messaging,
                  invites, and shared workspaces.
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/aef54f9988b2c84be8d46dfee231331980f0b24b?placeholderIfAbsent=true"
              alt="Collaboration"
              className="aspect-[0.5] object-contain w-[287px] shrink-0 max-w-full grow mt-[19px]"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="self-center z-10 flex mt-[-274px] items-center max-md:max-w-full max-md:mt-[-200px]">
        <div className="self-stretch min-w-60 w-[460px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2fd8372dba5adec30abf326bcf794758659747e9?placeholderIfAbsent=true"
            alt="Decorative element"
            className="aspect-[1] object-contain w-full max-md:max-w-full"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/922c107e-e528-4a6d-a02c-3297a35fdeb2?placeholderIfAbsent=true"
        alt="Decorative element"
        className="aspect-[0.61] object-contain w-[633px] mt-[-518px] max-w-full max-md:mt-[-200px]"
      />
    </section>
  );
};

export default Features;
