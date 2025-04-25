import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Bizlaxy free to use?",
      answer: "Bizlaxy offers both free and premium tiers. The basic features are available for free to all users, while advanced tools and capabilities are part of our premium subscription plans."
    },
    {
      question: "How does the waitlist work?",
      answer: "When you join our waitlist, you'll receive a confirmation email with your position. As we roll out access, we'll invite users in batches."
    },
    {
      question: "When is the official app launch?",
      answer: "We're currently in private beta and plan to launch publicly in the coming months. Waitlist members will get access first."
    },
    {
      question: "Can I suggest new features?",
      answer: "Absolutely! We love hearing from our community. Please submit your suggestions through our feedback form."
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click the 'Forgot Password' link on the login page and follow the instructions sent to your email."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support and a comprehensive knowledge base. Premium users also get priority support and live chat assistance."
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-white mb-4">
          Got <span className="text-[#9B87F5]">Questions</span>?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mb-12">
          We've got answers! Whether you're wondering about features, pricing, or
          how to get started, we're here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[rgba(23,23,23,0.4)] border border-[rgba(58,58,58,1)] rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 text-white text-lg font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-white/70">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
