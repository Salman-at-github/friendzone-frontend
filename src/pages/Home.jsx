import React, { useEffect } from 'react'

const Home = () => {
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigateTo("/login")
        }
    },[])
  return (
    <div>Home</div>
  )
}

export default Home