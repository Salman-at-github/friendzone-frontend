import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import noDP from '../assets/noDP.png';
import logo from '../assets/fzlogo.jpg'
import useGetUser from "../hooks/useGetUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true; // Replace with your logic to check if the user is logged in

  const {user} = useGetUser();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 w-full relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-8 h-8 400 mr-2 overflow-hidden `}>
            <img src={logo} alt="Friend Zone logo" />
          </div>
          <span className="text-2xl font-bold">Friend</span><span className="text-2xl font-bold text-yellow-400 ">Zone</span>
        </div>

        <FaBars
          onClick={toggleNavbar}
          className="text-white text-2xl cursor-pointer"
        />
        <div className={`w-40 bg-blue-600 rounded-sm absolute top-0 right-0 transition-transform duration-300 transform ${!isOpen ? "translate-x-full" : "translate-x-0"}`}>
          <FaTimes
            onClick={toggleNavbar}
            className="text-white text-2xl cursor-pointer absolute top-4 right-4"
          />
          <div className={`mx-auto flex flex-col items-start mt-16 w-40`}>
            {isLoggedIn &&(<>
            <img className="h-10 w-10 rounded-full absolute top-4 left-4" src={user?.img? user.img : noDP} alt="DP" />
              <a
                href="#"
                className="text-white mb-6 ml-4 mt-6 transition-all duration-300 hover:font-bold"
              >
                Logout
              </a>
              </>)}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
