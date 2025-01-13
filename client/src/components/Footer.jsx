import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
    <footer className="z-50 bg-transparent text-white py-10 border-t border-white sm:justify-center text-center align-middle items-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-2">
              <Link
                to="/" // Navigates to '/'
                className="flex items-center text-start space-x-2 hover:cursor-pointer"
              >
                <div
                  id="logoSqure"
                  className="bg-stone-200 text-black font-bold p-2 rounded-lg"
                >
                  ARI
                </div>
                <div className="flex flex-col">
                  <span id="logo" className="font-bold text-lg text-white">
                    ARTICON
                  </span>
                  <span className="text-xs text-gray-400">
                    BRING YOUR IDEA TO ART
                  </span>
                </div>
              </Link>
            </div>
            <div className="border border-white h-11 "></div>
            <div className="hidden md:block  text-gray-400 ml-8">
              All rights reserved. Copyright @articon
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.092,0.682-0.217,0.682-0.482 c0-0.237-0.008-0.866-0.013-1.7c-2.782,0.604-3.369-1.34-3.369-1.34c-0.455-1.156-1.11-1.464-1.11-1.464 c-0.908-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.892,1.529,2.341,1.087,2.91,0.831 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.253-4.555-1.11-4.555-4.943c0-1.091,0.39-1.984,1.029-2.683 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.683c0,3.841-2.337,4.687-4.565,4.935c0.359,0.309,0.678,0.919,0.678,1.852 c0,1.336-0.012,2.415-0.012,2.743c0,0.267,0.18,0.577,0.688,0.479C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"/>
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22,12c0-5.523-4.477-10-10-10S2,6.477,2,12c0,4.991,3.657,9.128,8.438,9.878v-6.987h-2.54V12h2.54V9.797 c0-2.506,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.243,0-1.63,0.771-1.63,1.562V12h2.773l-0.443,2.89 h-2.33v6.988C18.343,21.128,22,16.991,22,12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="md:hidden text-gray-400 text-sm mt-4">
          All rights reserved. Copyright @imagify
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;