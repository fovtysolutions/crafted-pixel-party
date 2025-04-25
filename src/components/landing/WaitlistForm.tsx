import React, { useState } from "react";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would typically send the email to your backend
    console.log("Submitting email:", email);

    // Simulate success
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      {submitted ? (
        <div className="bg-[rgba(28,75,196,0.2)] text-white p-4 rounded-lg text-center">
          <h3 className="text-xl font-medium mb-2">You're on the list!</h3>
          <p>
            Thank you for joining our waitlist. We'll be in touch soon with
            updates about Bizlaxy.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9645FF] focus:border-transparent"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full relative flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[linear-gradient(90deg,#1C4BC4_0%,#9645FF_100%)] rounded-full hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </button>
          <p className="text-xs text-gray-400 text-center">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      )}
    </div>
  );
};

export default WaitlistForm;
