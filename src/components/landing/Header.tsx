import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(0,0,0,0.2)] self-stretch z-10 flex min-h-[100px] w-full flex-col items-center font-normal whitespace-nowrap justify-center px-[58px] py-7 border-[rgba(86,86,86,1)] border-b max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1393px] items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <Link
          to="/"
          className="self-stretch text-2xl text-white uppercase w-44 my-auto px-10 py-px"
        >
          Bizlaxy
        </Link>
        <nav className="self-stretch flex min-w-60 items-center gap-[23px] text-base text-white my-auto">
          <button className="self-stretch bg-black border gap-2.5 my-auto px-9 py-2.5 rounded-[50px] border-white border-solid max-md:px-5">
            Features
          </button>
          <button className="self-stretch w-[136px] my-auto rounded-[50px]">
            <div className="self-stretch bg-[linear-gradient(90deg,#1C4BC4_0%,#9645FF_100%)] gap-2.5 px-9 py-2.5 rounded-[50px] max-md:px-5">
              Benefits
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
