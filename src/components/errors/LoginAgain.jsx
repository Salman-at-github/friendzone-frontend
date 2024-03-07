import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaSignInAlt } from 'react-icons/fa';

const LoginAgain = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <div className="flex items-center justify-center mb-4 text-red-500">
          <FaExclamationCircle className="mr-2 text-3xl" />
          <span className="font-bold text-xl">Session Expired</span>
        </div>
        <p className="text-gray-600 text-center mb-6">Please login again.</p>
        <Link to="/login" className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          <FaSignInAlt className="mr-2" />
          Login
        </Link>
      </div>
    </div>
  );
};

export default LoginAgain;
