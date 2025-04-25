import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="flex w-full flex-col items-stretch justify-center mt-5 py-0.5 max-md:max-w-full">
      <div
        className={`self-stretch bg-[rgba(23,23,23,0.4)] border px-[30px] py-5 rounded-xl border-[rgba(58,58,58,1)] border-solid max-md:px-5 cursor-pointer transition-colors ${isOpen ? "border-[rgba(100,100,100,1)]" : ""}`}
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <div>{question}</div>
          <div className="text-xl">{isOpen ? "−" : "+"}</div>
        </div>
        {isOpen && (
          <div className="text-base font-light mt-4 text-gray-300">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Q. Is Bizlaxy free to use?",
      answer:
        "Bizlaxy offers both free and premium tiers. The basic features are available for free to all users, while advanced tools and capabilities are part of our premium subscription plans. We believe in providing value before asking for payment.",
    },
    {
      question: "Q. How does the waitlist work?",
      answer:
        "When you join our waitlist, you'll receive a confirmation email with your position. As we roll out access, we'll invite users in batches. Referring friends can boost your position and give you earlier access to the platform.",
    },
    {
      question: "Q. When is the official app launch?",
      answer:
        "We're currently in private beta and plan to launch publicly in the coming months. Waitlist members will get access first, followed by a general release. Stay tuned to our newsletter for the latest updates on our launch timeline.",
    },
    {
      question: "Q. Can I pitch my idea without a team or product?",
      answer:
        "Absolutely! Bizlaxy is designed for entrepreneurs at all stages. You can create an 'Idea Stage' pitch that focuses on your concept, market opportunity, and vision. This is a great way to attract potential co-founders and early advisors.",
    },
    {
      question: "Q. Is my data and idea safe?",
      answer:
        "We take security and intellectual property seriously. Your data is encrypted and protected according to industry standards. You control who sees your pitches and ideas through granular privacy settings, and we never share your information without permission.",
    },
    {
      question: "Q. How can investors discover businesses to invest in?",
      answer:
        "Investors can browse pitches by industry, stage, location, and funding requirements. Our matching algorithm also suggests relevant opportunities based on investment preferences and history. Investors can follow companies to stay updated on their progress.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex w-full flex-col items-center mt-[68px] max-md:max-w-full max-md:mt-10">
      <div className="w-[1392px] max-w-full text-white px-5">
        <div className="flex gap-[40px_83px] justify-between flex-wrap max-md:max-w-full">
          <div className="flex min-w-60 flex-col items-stretch w-[607px] rounded-[0px_0px_0px_0px] max-md:max-w-full">
            <h2 className="text-[46px] font-medium max-md:text-[40px]">
              Got Questions?
            </h2>
            <p className="text-base font-light mt-[21px] max-md:max-w-full">
              We've got answers! At Bizlaxy, we understand that starting
              something new comes with a lot of curiosity and we're here for it.
              Whether you're wondering how the platform works, what kind of
              support you'll get, or how your data is protected, this section is
              designed to give you clarity and peace of mind. From early access
              to pitching your idea without a team, we cover everything you need
              to know to make the most of your Bizlaxy journey.
            </p>
          </div>
          <div className="min-w-60 overflow-hidden text-[22px] font-normal w-[700px] max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch justify-center py-0.5 max-md:max-w-full">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
