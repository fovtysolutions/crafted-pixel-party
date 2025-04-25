import React, { useState } from "react";
import JoinWaitlistModal from "./JoinWaitlistModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="self-stretch mt-[-100px] w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[27%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/5f6257e449bdec668267e63cdb3f6fc662ac7afe?placeholderIfAbsent=true"
            alt="Decorative space background"
            className="aspect-[0.66] object-contain w-full max-md:max-w-full"
          />
        </div>
        <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col mt-[190px] max-md:max-w-full max-md:mt-10">
            <div className="z-10 flex w-[1011px] max-w-full flex-col items-center justify-center">
              <div className="flex w-[851px] max-w-full flex-col items-stretch text-white text-center px-[22px] rounded-[0px_0px_0px_0px] max-md:px-5">
                <h1 className="text-[46px] font-bold max-md:max-w-full max-md:text-[40px] max-md:mr-2.5">
                  <span
                    style={{
                      fontFamily:
                        "Lexend, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    A New Galaxy of{" "}
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "Lexend, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Business
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "Lexend, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    Awaits
                  </span>
                </h1>
                <p className="text-base font-light mt-[11px] max-md:max-w-full">
                  Bizlaxy is orbiting your way — a revolutionary platform that
                  connects professionals, fuels ideas, and unlocks limitless
                  possibilities. Get ready to experience networking like never
                  before.
                </p>
              </div>
              <div className="w-[198px] max-w-full mt-[30px]">
                <div className="relative flex items-start gap-2.5 justify-center px-9 py-[11px] max-md:px-5">
                  <div className="bg-white absolute z-0 flex flex-col items-center justify-center -translate-x-2/4 -translate-y-2/4 p-0.5 rounded-[100px] left-2/4 top-2/4">
                    <div className="backdrop-blur-[15px] bg-[linear-gradient(90deg,#1C4BC4_0%,#9645FF_100%)] flex min-h-14 gap-[5px] py-2.5 rounded-[100px]" />
                  </div>
                  <button
                    className="text-white text-base font-normal z-0 my-auto"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Join the Waitlist
                  </button>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/f60ff25d2acbd2a59be874c39a76140686f212d9?placeholderIfAbsent=true"
              alt="Decorative element"
              className="aspect-[0.5] object-contain w-[398px] max-w-full -mt-7"
            />
          </div>
        </div>
      </div>

      <JoinWaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
