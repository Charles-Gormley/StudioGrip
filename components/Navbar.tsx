"use client";

import React, { useState } from "react";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-200 p-4 flex items-center justify-between">
            <a href="/" className="flex items-center hover:text-white">
                <span class="text-black font-light text-xl">StudioGrip</span>
            </a>
            <div className="hidden lg:flex items-center space-x-6">
                <a href="/" className="text-black font-light hover:text-white flex items-center">
                    Home <img src="home.png" alt="" className="ml-1 h-10" />
                </a>
                <a href="/shop" className="text-black font-light hover:text-white flex items-center">
                    Shop <img src="shop.png" alt="" className="ml-1 h-10" />
                </a>
                <a href="/docs" className="text-black font-light hover:text-white flex items-center">
                    Docs <img src="docs.png" alt="" className="ml-1 h-10" />
                </a>
                <a href="/contact" className="text-black font-light hover:text-white flex items-center">
                    Contact Us <img src="contact.png" alt="" className="ml-1 h-10" />
                </a>
            </div>
            <button
                className="px-3 py-2 rounded lg:hidden text-black font-light  hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {/* SVG icon for menu */}
            </button>
            {isMenuOpen && (
                <div className="flex flex-col lg:hidden">
                    {/* Your mobile menu items */}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
