import React, { useEffect } from "react";
import CardContainer from "../components/Card Container";
import useRedirect from "../hooks/useRedirect";



const Home = () => {

  const {goTo} = useRedirect()

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      goTo("/login")
    }
  },[])
  return (
    <div className="md:min-h-screen">
      <CardContainer />
    </div>
  );
};

export default Home;
