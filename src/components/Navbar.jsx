//NOTE: Add "overflow-x-hidden to the  main div or the body to prevent horizontal scrollbar"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 w-full relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Dummy Logo */}
          <div className="w-8 h-8 bg-gray-400 mr-2"></div>
          {/* <span className="text-white text-lg font-semibold tracking-wider">Your Logo</span> */}
          <span className="text-xl font-bold text-red-500">Friend</span><span className="text-xl font-bold text-white">Zone</span>
        </div>

        {/* Mobile Menu Button */}
        <FaBars
          onClick={toggleNavbar}
          className="text-white text-2xl cursor-pointer sm:hidden"
        />
        <div className={`sm:hidden w-40 bg-blue-600 absolute top-0 right-0 transition-transform duration-300 transform ${!isOpen ? "translate-x-full" : "translate-x-0"}`}>
          <FaTimes
            onClick={toggleNavbar}
            className="text-white text-2xl cursor-pointer absolute top-4 right-4"
          />
          <div className={`mx-auto flex flex-col items-start mt-16 w-40`}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white mb-4 ml-8 transition-all duration-300 hover:font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex justify-between items-center space-x-6 mr-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-white font-semibold transition-all duration-300 hover:scale-110 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
