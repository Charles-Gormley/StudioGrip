"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    
    <nav className="bg-gray-200 dark:bg-stone-950 p-4 flex items-center justify-between">
      <a href="/" className="flex items-center hover:text-white">
        <span className="text-black dark:text-white font-light text-xl">StudioGrip</span>
      </a>
      <div className="hidden lg:flex items-center space-x-6">
      <div className="relative inline-block w-20 h-10 align-middle select-none">
          <input
            type="checkbox"
            name="darkModeToggle"
            id="darkModeToggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="toggle-checkbox absolute block w-10 h-10 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out"
            style={{ transform: isDarkMode ? 'translateX(100%)' : 'translateX(0%)' }}
          />
          <label
            htmlFor="darkModeToggle"
            className="toggle-label block overflow-hidden h-10 rounded-full bg-gray-300 cursor-pointer"
          >
            <span className="absolute inset-0 flex items-center justify-between p-2">
              <img
                src="/assets/sun.png"
                alt="Sun"
                className={`w-6 h-6 transition-opacity duration-200 ease-in-out ${
                  isDarkMode ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <img
                src="/assets/moon.png"
                alt="Moon"
                className={`w-6 h-6 transition-opacity duration-200 ease-in-out ${
                  isDarkMode ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </span>
          </label>
        </div>
        <a href="/" className="text-black dark:text-white font-light hover:text-white flex items-center">
          Home
          <img src="home.png" alt="" className={`ml-1 h-10 ${isDarkMode ? 'filter invert' : ''}`} />
        </a>
        <a href="/shop" className="text-black dark:text-white font-light hover:text-white flex items-center">
          Shop
          <img src="shop.png" alt="" className={`ml-1 h-10 ${isDarkMode ? 'filter invert' : ''}`} />
        </a>
        <a href="/docs" className="text-black dark:text-white font-light hover:text-white flex items-center">
          Docs
          <img src="docs.png" alt="" className={`ml-1 h-10 ${isDarkMode ? 'filter invert' : ''}`} />
        </a>
        <a href="/contact" className="text-black dark:text-white font-light hover:text-white flex items-center">
          Contact Us
          <img src="contact.png" alt="" className={`ml-1 h-10 ${isDarkMode ? 'filter invert' : ''}`} />
        </a>
        
      </div>

        
      {isMenuOpen && (
        <div className="flex flex-col lg:hidden">
          {/* Your mobile menu items */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;