import React, { useState } from 'react';
import noDP from '../../assets/noDP.png';
import { useGlobal } from '../../context/globalContext';
import { FaVideo } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { MdEmojiEmotions } from 'react-icons/md';
import { createPost } from '../../api/createPost';
import useGetPosts from '../../hooks/useGetPosts';
import { throttle } from '../../utils/helpers'; // Import the throttle function
import { useShowToast } from '../../hooks/useShowToast';

const PostForm = () => {
  const { user } = useGlobal();
  const { addPostLocally } = useGetPosts();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const showToast = useShowToast();

  // Throttle the handleSubmit function
  const throttledSubmit = throttle(async () => {
    try {
      addPostLocally(title, content, user._id, user.name);
      await createPost(title, content, user?.name || 'Anonymous');
      setTitle('');
      setContent('');
      showToast('success',"Post created!")
    } catch (error) {
      showToast('error', `Encountered error: ${error?.response.data.message}`)
    }
  }, 3000); // Set the desired throttle delay (in milliseconds)

  const handleSubmit = (e) => {
    e.preventDefault();
    throttledSubmit();
  };

  return (
    <div className="bg-white mx-auto mt-10 rounded-lg overflow-hidden shadow-md p-4 w-[90vw] md:w-[50vw] transition-transform duration-200 h-fit relative">
      <h2 className="text-center my-6 text-2xl"> Create New Post</h2>
      <div className="border-b pb-8">
        <form onSubmit={handleSubmit}>
        <div className="flex justify-start items-start ">
          <img
            className="h-16 w-16 object-fit rounded-full mr-3"
            src={user?.img ? user.img : noDP}
            alt="No DP"
          />
          <div className="flex justify-center items-start flex-col flex-1">
            <input
              required
              className=" mb-4 w-full bg-gray-200 rounded-md py-2 px-4 placeholder:text-gray-500 focus:border-yellow-300 focus:outline-none focus:ring-2"
              type="text"
              placeholder={`Post Title`}
              value={title}
              onChange={e => (setTitle(e.target.value))}
            />
            <textarea
              required
              className="mb-8 w-full bg-gray-200 h-14 rounded-md py-2 px-4 placeholder:text-gray-500 focus:border-yellow-300 focus:outline-none focus:ring-2"
              type="text"
              placeholder={`Describe the post, ${user?.name}`}
              value={content}
              onChange={e =>(setContent(e.target.value))}
            />
          </div>
        </div>
        <button type="submit" disabled={! title || !content} className="bg-blue-400 hover:bg-blue-500 disabled:bg-gray-400 w-full py-2 text-center rounded-md text-white font-bold">
          Post
        </button>
        </form>
      </div>

      <div className="flex justify-center gap-2 text-sm md:text-lg  md:gap-10 items-center mt-2 text-gray-600">
        <span
          title="Dummy Live Video"
          className="flex justify-center items-center gap-2 cursor-pointer hover:scale-105"
        >
          <FaVideo className="text-red-500 text-2xl" />
          Live Video
        </span>
        <span
          title="Dummy Photo/Video Post"
          className="flex justify-center items-center gap-2 cursor-pointer hover:scale-105"
        >
          <FaPhotoVideo className="text-green-500 text-2xl" />
          Photo/Video
        </span>
        <span
          title="Dummy Feeling/Activity"
          className="flex justify-center items-center gap-2 cursor-pointer hover:scale-105"
        >
          <MdEmojiEmotions className="text-yellow-500 text-2xl" />
          Feeling/Activity
        </span>
      </div>
    </div>
  );
};

export default PostForm;
