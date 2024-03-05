import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 w-full h-fit relative animate-pulse ">
        <div className="h-1 w-4 absolute top-4 right-4 bg-gray-300"></div>
      <div className="animate-pulse flex justify-start items-center">
        <div className="h-10 w-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <div className="h-4 w-20 bg-gray-300 mb-1"></div>
          <div className="h-2 w-16 bg-gray-300"></div>
        </div>
      </div>
      <div>
        <div className="h-6 w-full bg-gray-300 mt-2"></div>
        <div className="h-16 w-full bg-gray-300 mt-2"></div>
      </div>

      <div className="animate-pulse flex justify-center gap-[30%] items-center mt-2">
        <div className="h-6 w-16 bg-gray-300"></div>
        <div className="h-6 w-24 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
