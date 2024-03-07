import React from "react";
import {FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import logo from '../assets/fzlogo.jpg'
import { useGlobal } from "../context/globalContext";


const Footer = () => {

  const {topRef} = useGlobal()

  const scrollToTop = () =>{
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="bg-blue-500 text-white p-8 relative">
      <FaArrowUp onClick={scrollToTop} title="Scroll Top" className="absolute top-5 right-5 md:right-[47%] md:-top-5 cursor-pointer hover:scale-110 text-2xl md:text-4xl"/>
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
            <a href="https://github.com/Salman-at-github" target="_blank" rel="noreferrer" className="text-2xl hover:scale-110 duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dev-salm/" target="_blank" rel="noreferrer" className="text-2xl hover:scale-110 duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-2xl hover:scale-110 duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
