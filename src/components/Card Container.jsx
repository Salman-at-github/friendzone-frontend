// CardContainer.js

import React, { useCallback, useRef, useState } from "react";
import Card from "./Card";
import useGetPosts from "../hooks/useGetPosts";
import Loading from "./Loading";
import { useGlobal } from "../context/globalContext";
import PostForm from "./forms/PostForm";
import LoginAgain from "./errors/LoginAgain";
import ErrorFallback from "./errors/ErrorFallback";

const CardContainer = () => {
  const [pageNum, setPageNum] = useState(1);

  const { loading, error, posts, hasMore, unauthorized } = useGetPosts(pageNum);

  const { user } = useGlobal();

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (node) => {
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
    },
    [loading, hasMore]
  );

  //If token expired, redirect to Login
  if(unauthorized){
    return(
      <LoginAgain/>
    )
  }
  
  // If server issue, show error
  if(Object.keys(error).length > 0){
    return (<ErrorFallback/>)
  }


  return (
    <>
      <PostForm />
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-8 sm:px-20 py-20">
        {posts?.length > 0 ? (
          posts.map((post, index) => {
            if (posts.length === index + 1) {
              // If it's the last post, pass it the ref
              return <Card key={index} {...post} ref={lastPostRef} user={user} />;
            }
            return <Card key={index} {...post} user={user} />;
          })
        ) : (
          !loading && (
            <>
              <h2 className="text-2xl font-semibold">No posts created</h2>
            </>
          )
        )}
        {loading && <Loading />}
      </div>
    </>
  );
  
};

export default CardContainer;
