import React from "react";
import WaitlistForm from "./WaitlistForm";

interface JoinWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinWaitlistModal: React.FC<JoinWaitlistModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div
        className="relative bg-[#121212] border border-[rgba(86,86,86,1)] rounded-xl w-full max-w-md p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Join the Bizlaxy Waitlist
          </h2>
          <p className="text-gray-300">
            Be among the first to experience the future of business networking.
          </p>
        </div>

        <WaitlistForm />
      </div>
    </div>
  );
};

export default JoinWaitlistModal;
