
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-medium text-white hover:text-white/90 transition-colors"
        >
          Bizlaxy
        </Link>
        <nav className="flex items-center gap-4">
          <button className="px-6 py-2 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            Features
          </button>
          <button className="px-6 py-2 text-white bg-gradient-to-r from-[#1C4BC4] to-[#9645FF] rounded-full hover:opacity-90 transition-opacity">
            Benefits
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
