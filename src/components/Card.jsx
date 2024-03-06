import React, { forwardRef } from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { formatTimeDistance } from "../utils/helpers";
import noDP from '../assets/noDP.png';

const Card = forwardRef(({ title, createdAt, content, user }, ref) => {
  const body = (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 w-full hover:scale-[102%] transition-transform duration-200 h-fit relative">
      <BsThreeDots
        title="Dummy post options"
        className="absolute top-4 right-4 cursor-pointer hover:scale-105"
      />
      <div className="flex justify-start items-center">
        <img
          className="h-10 w-10 object-fit rounded-full mr-3"
          src={user?.img ? user.img : noDP}
          alt={title}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {user?.name ? user.name : "Anonymous"}
          </h3>
          <div className="flex justify-start items-center">
            <p className="font-normal text-gray-600 mr-2">
              {formatTimeDistance(createdAt)}
            </p>
            <FaGlobeAsia />
          </div>
        </div>
      </div>
      <div>
        <h2 className="mt-2 font-[600] text-gray-600">{title}</h2>
        <p className="text-gray-700 mt-2 border-b pb-4">{content}</p>
      </div>

      <div className="flex justify-center gap-[30%] items-center mt-2 text-gray-600">
        <span
          title="Dummy like"
          className="flex justify-center items-center gap-2 text-lg cursor-pointer hover:scale-105"
        >
          <AiOutlineLike />
          Like
        </span>
        <span
          title="Dummy comment"
          className="flex justify-center items-center gap-2 cursor-pointer hover:scale-105"
        >
          <FaRegCommentDots />
          Comment
        </span>
      </div>
    </div>
  );

  const contentWithRef = ref ? <article ref={ref}>{body}</article> : <article>{body}</article>;

  return contentWithRef;
});

export default Card;
