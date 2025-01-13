import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [user, setUser] = useState(null); // State for user info
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for profile dropdown
  const location = useLocation();

  const handleAuthClick = () => {
    setIsModalOpen(true);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolling(scrollTop > 50);
  };

  const handleLogout = () => {
    setUser(null); // Simulate logout by clearing the user
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`z-50 ${scrolling ? "bg-black bg-opacity-80" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:cursor-pointer"
              >
                <div id="logoSqure" className="bg-stone-200 text-black font-bold p-2 rounded-lg">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
              <a href="/" className="text-white relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="/pricing" className="text-white relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="/Dall-E-Studio" className="text-white relative group">
                Creator Studio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </div>

            {/* Auth or Profile Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    className="rounded-full focus:outline-none"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <img
                      src={user.profilePic}
                      alt="User Profile"
                      className="w-10 h-10 rounded-full border border-white"
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                      <button className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left">
                        Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleAuthClick}
                  className="bg-white text-black px-6 py-2 rounded-full font-medium"
                >
                  Login / Signup
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-white py-2">
                  Home
                </a>
                <a href="/pricing" className="text-white py-2">
                  Pricing
                </a>
                <a href="/Dall-E-Studio" className="text-white py-2">
                  Creator Studio
                </a>
                {user ? (
                  <div className="flex flex-col space-y-2">
                    <button
                      className="text-white text-left"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      Settings
                    </button>
                    <button
                      className="text-white text-left"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAuthClick}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium w-full"
                  >
                    Login / Signup
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={(userInfo) => setUser(userInfo)} // Update user state on login
      />
    </div>
  );
};

export default Navbar;
