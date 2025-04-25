import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Community from "./Community";
import UserTypes from "./UserTypes";
import Features from "./Features";
import FAQ from "./FAQ";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="backdrop-blur-[53.04999923706055px] bg-[#050505] flex flex-col overflow-hidden items-stretch">
      <Header />
      <Hero />
      <Community />
      <UserTypes />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
