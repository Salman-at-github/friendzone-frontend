import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import noDP from '../assets/noDP.png';
import logo from '../assets/fzlogo.jpg'
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useGlobal } from "../context/globalContext";
import useGetUser from "../hooks/useGetUser";


const Navbar = () => {
  const {logout} = useGlobal(); //fetch user
  const path = useLocation().pathname;
  const {user} = useGetUser(path)
  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //close menu on route change
  useEffect(()=>{
    setIsOpen(false);
  },[path])

  return (
    <nav className="bg-blue-500 p-4 w-full relative z-[998]">
      <div className="flex items-center justify-between">
        <div className="flex items-center select-none">
          <div className={`w-8 h-8 400 mr-2 overflow-hidden `}>
            <img src={logo} alt="Friend Zone logo" />
          </div>
          <span className="text-2xl font-bold">Friend</span><span className="text-2xl font-bold text-red-400 ">Zone</span>
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
          <div className={`mx-auto flex flex-col items-start mt-16 w-40 text-white`}>
            {user ? (<>
            <img className="h-10 w-10 rounded-full absolute top-4 left-4" src={user?.img? user.img : noDP} alt="DP" />
              <p className=" ml-4 my-4 font-medium">({user.name})</p>
              <Link
                to="/login" onClick={(e)=>{logout()}}
                className="flex justify-center items-center mb-6 ml-4 transition-all duration-300 font-semibold hover:underline"
              >
                <FiLogOut className="mr-1"/>Logout
              </Link>
              </>) : (
                <Link className="ml-4 mb-6" to="/login">Please login</Link>
              )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
