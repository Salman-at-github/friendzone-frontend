import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center order-1 md:order-0">
          <div className="w-8 h-8 bg-gray-400 mr-2"></div>
          <span className="text-lg font-semibold tracking-wider">Your Logo</span>
        </div>

        <p className="text-sm order-2 md:order-0">&copy; 2024 Your Company. All rights reserved.</p>


        {/* Follow Us */}
        <div className="order-3 md:order-0 flex justify-center items-center flex-col">
          <p className="text-lg font-semibold mb-4">Follow us</p>
          <div className="flex space-x-4">
            <a href="/" className="text-2xl hover:scale-110 duration-300">
              <FaFacebook />
            </a>
            <a href="/" className="text-2xl hover:scale-110 duration-300">
              <FaTwitter />
            </a>
            <a href="/" className="text-2xl hover:scale-110 duration-300">
              <FaInstagram />
            </a>
            <a href="/" className="text-2xl hover:scale-110 duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
