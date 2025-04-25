
import React, { useState } from "react";
import JoinWaitlistModal from "./JoinWaitlistModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative self-stretch w-full max-md:max-w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
        <h1 className="text-[56px] leading-tight font-medium text-white max-w-[800px] mx-auto mb-6">
          <span>A New Galaxy of </span>
          <span className="text-[#9B87F5]">Business</span>
          <span> Awaits</span>
        </h1>
        <p className="text-white/80 text-lg max-w-[600px] mx-auto mb-12">
          Bizlaxy is orbiting your way — a revolutionary platform that connects
          professionals, fuels ideas, and unlocks limitless possibilities. Get
          ready to experience networking like never before.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative px-8 py-3 text-white text-lg font-medium bg-gradient-to-r from-[#1C4BC4] to-[#9645FF] rounded-full hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </button>
      </div>

      <div className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/747101cf-9a81-4215-b9b2-5acdf63b2edb.png"
          alt="Background galaxy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <JoinWaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
