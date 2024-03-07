import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <div className="flex items-center justify-center mb-4 text-red-500">
          <FaExclamationCircle className="mr-2 text-3xl" />
          <span className="font-bold text-xl">Something Went Wrong</span>
        </div>
        <p className="text-gray-600 text-center mb-6">Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorFallback;
