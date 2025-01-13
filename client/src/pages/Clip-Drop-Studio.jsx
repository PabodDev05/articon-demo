import React, { useState } from 'react';
import genartsample from '../assets/images/Sample-Image4.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ClipDropStudio = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Dall-E-Studio');
  };

  const [isLoading, setIsLoading] = useState(false); // Manages the loading state for the image container.
  const [prompt, setPrompt] = useState(''); // Stores the user's input text.
  const [isGenerating, setIsGenerating] = useState(false); // Tracks when the "Generate" action is in progress.

  const handleGenerate = () => {
    setIsGenerating(true); // Set loading state to true when generating starts.
    setIsLoading(true); // Simulate image loading state.

    // Simulate a 3-second delay for "generation".
    setTimeout(() => {
      setIsGenerating(false); // Stop the "Generating" state.
      setIsLoading(false); // Stop the image loading state.
    }, 3000); // Adjust time as needed for simulation.
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white flex flex-col items-center py-8 pb-48"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-xl mb-12 px-4"
      >
        <button
          onClick={handleClick}
          className="mx-auto block px-8 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 text-sm font-medium"
        >
          Switch to DALL - E
        </button>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-2xl md:text-3xl font-light tracking-wide mb-16"
      >
        CLIPDROP CREATOR STUDIO
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full max-w-md aspect-square relative mb-12 px-4"
      >
        <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-800 shadow-xl">
          <img
            src={genartsample}
            alt="Generated Art"
            className="w-full h-full object-cover opacity-90"
          />
          {isLoading && (
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/100 to-transparent">
              <span className="text-sm text-gray-300 font-light">Loading.....</span>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-2xl px-6"
      >
        <div className="relative group">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to generate"
            disabled={isGenerating} // Disable input during generation
            className={`w-full px-6 py-4 pr-32 rounded-full bg-neutral-900 border border-gray-900 focus:outline-none ${
              isGenerating
                ? 'cursor-not-allowed text-gray-500'
                : 'focus:border-gray-600 focus:ring-1 focus:ring-gray-600 text-white'
            } placeholder-gray-500 text-sm transition-all duration-300`}
          />
          <button
            onClick={handleGenerate}
            className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full transition-all duration-300
              ${prompt
                ? 'bg-white text-black hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                : 'bg-black text-gray-400 cursor-not-allowed'}`}
            disabled={!prompt || isGenerating} // Disable button if no prompt or during generation
          >
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClipDropStudio;
