import React, { useEffect } from "react";
import CardContainer from "../components/Card Container";
import PostForm from "../components/forms/PostForm";
import useRedirect from "../hooks/useRedirect";



const Home = () => {

  const {goTo} = useRedirect()

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      goTo("/login")
    }
  },[])
  return (
    <>
      <PostForm />
      <CardContainer />
    </>
  );
};

export default Home;
