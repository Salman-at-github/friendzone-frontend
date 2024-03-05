// CardContainer.js

import React, { useCallback, useRef, useState } from "react";
import Card from "./Card";
import useGetPosts from "../hooks/useGetPosts";
import Loading from "./Loading";

const CardContainer = () => {
  const [pageNum, setPageNum] = useState(1);

  const { loading, isError, error, posts, hasMore } = useGetPosts(pageNum);

  const intObserver = useRef()
  const lastPostRef = useCallback((node) => {
    if (loading) return;
    if (intObserver.current) intObserver.current.disconnect();
  
    intObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNum((prevNum) => prevNum + 1);
      }
    });
  
    if (node) {
      intObserver.current.observe(node);
    }
  }, [loading, hasMore]);
  
  

  if (isError) {
    return <div>We faced error {error.message}</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 bg-gray-300 gap-1 sm:px-20 py-20">
      {posts?.map((post, index) => {
        if (posts.length === index + 1) { //if its last post, pass it ref
          return <Card key={post._id} {...post} ref={lastPostRef} />;
        }
        return <Card key={post._id} {...post} />;
      })}
      {loading && (
        <Loading/>
      )}
    </div>
  );
};

export default CardContainer;
