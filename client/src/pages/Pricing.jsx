import React, { useState } from 'react';
import { Star } from 'lucide-react'; // Import the Star icon from the lucide-react library
import AuthModal from '../components/AuthModal'; // Import your existing AuthModal component
import { motion } from 'framer-motion'; // Import framer-motion

// PricingCard Component: Displays individual pricing card with plan details
const PricingCard = ({ tier, tokens, models, description, price, recommended = false, className = "", onPurchase }) => (
  <motion.div
    initial={{ opacity: 0 }} // Initial state: fully transparent
    animate={{ opacity: 1 }} // Animate to full opacity when the component mounts
    transition={{ duration: 3 }} // Set the duration of the fade-in effect
    className={`relative p-8 sm:p-10 flex flex-col min-h-[600px] ${className}`}
  >
    {/* Display recommended badge if the plan is recommended */}
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-zinc-800 text-white px-4 py-1 rounded-full flex items-center gap-2">
          <span>Recommended</span>
          <Star size={16} className="fill-white" />
        </div>
      </div>
    )}
    {/* Display the tier name (e.g., Gold, Platinum, Diamond) */}
    <h2 className="text-3xl font-semibold text-white mb-8 text-center">{tier}</h2>
    {/* Display token, models, and description */}
    <div className="flex flex-col gap-8 mb-8 flex-grow">
      <div className="text-white">
        <span className="text-xl">- {tokens} Tokens</span>
      </div>
      <div className="text-white">
        <div className="font-medium mb-3">Generative Models</div>
        <ul className="space-y-2">
          {models.map((model, index) => (
            <li key={index} className="text-gray-300">
              <span className="inline-block mr-2">-</span>{model}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white">
        <div className="flex items-start">
          <span className="mr-2">-</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
    {/* Display price and purchase button */}
    <div className="mt-auto">
      <div className="text-white text-xl font-light mb-2 text-center">
        ${price}/ <span className="text-sm text-neutral-500">{tokens} tokens</span>
      </div>
      <div className="flex justify-center">
        <button
          className={`w-2/3 py-3 px-6 rounded-full transition-colors ${
            recommended
              ? "bg-white text-black hover:bg-gray-200 lg:bg-black lg:text-white lg:hover:bg-zinc-800"
              : "bg-black text-white hover:bg-zinc-800"
          }`}
          onClick={onPurchase} // Trigger the purchase handler when clicked
        >
          Purchase
        </button>
      </div>
    </div>
  </motion.div>
);

// PricingPage Component: Displays all pricing plans and handles the purchase logic
const PricingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Dummy function to simulate login check (Replace this with real authentication logic)
  const checkLoginStatus = () => {
    // Here, replace with backend call or authentication library to check if the user is logged in
    return false; // Simulating not logged in for testing purposes
  };

  // Handle the purchase button click
  const handlePurchase = () => {
    // Check if the user is logged in or not
    if (!checkLoginStatus()) {
      // If user is not logged in, open the AuthModal to prompt for login/signup
      setIsModalOpen(true);
    } else {
      // Proceed with the purchase flow (e.g., API call to create subscription, charge user, etc.)
      alert("Proceeding with purchase...");
      // You may trigger an API call here to initiate the subscription
    }
  };

  // Define available pricing plans
  const plans = [
    {
      tier: "Gold", // Plan name
      tokens: "100", // Tokens included in this plan
      models: ["DALL-E", "CLIP DROP"], // Generative models available with this plan
      description: "Best for Personal use", // Brief description of the plan
      price: "10", // Price per month for this plan
      className: "bg-white/5" // Optional additional class for styling
    },
    {
      tier: "Platinum",
      tokens: "600",
      models: ["DALL-E", "CLIP DROP"],
      description: "Best for Commercial use",
      price: "50",
      recommended: true, // Mark this plan as recommended
      className: "bg-transparent"
    },
    {
      tier: "Diamond",
      tokens: "1100",
      models: ["DALL-E", "MIDJOURNEY"],
      description: "Best for Business use",
      price: "100",
      className: "bg-white/5"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state: fully transparent for the entire page
      animate={{ opacity: 1 }} // Animate to full opacity when the component mounts
      transition={{ duration: 1 }} // Set the duration of the fade-in effect
      className="min-h-screen bg-black py-12 sm:py-16 px-4 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-x-0 bottom-0 h-[1000px] mt-96">
        <div className="w-full h-full bg-gradient-to-t from-neutral-800 via-black to-transparent opacity-80 blur-[120px]" />
      </div>

      {/* Main content wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0 }} // Fade-in effect for the header
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} // Set delay for the header fade-in
          className="text-center mb-12 sm:mb-16"
        >
          <h3 className="text-gray-400 text-lg mb-4">Our Plans</h3>
          <h2 className="text-white text-4xl font-bold">CHOOSE THE PLAN</h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }} // Fade-in effect for pricing card grid
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }} // Set delay for the pricing grid fade-in
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-0 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard {...plan} onPurchase={handlePurchase} />
              {/* Optional divider between cards for larger screens */}
              {index !== plans.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[100%] bg-white" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Render the AuthModal if modal is open */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
};

export default PricingPage;
