import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from '../assets/fzlogo.jpg'


const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center select-none">
          <div className={`w-8 h-8 400 mr-2 overflow-hidden `}>
            <img src={logo} alt="Friend Zone logo" />
          </div>
          <span className="text-2xl font-bold">Friend</span><span className="text-2xl font-bold text-red-400 ">Zone</span>
        </div>

        <p className="text-sm order-2 md:order-0 select-none">&copy; 2024 FriendZone. All rights reserved.</p>


        {/* Follow Us */}
        <div className="order-3 md:order-0 flex justify-center items-center flex-col">
          <p className="text-lg font-semibold mb-4">Follow us</p>
          <div className="flex space-x-4">
            <a href="/" className="text-2xl hover:scale-110 duration-300">
              <FaGithub />
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
