import { useState, useEffect } from "react";
import { fetchUser } from "../api/fetchUser";

export default function useGetUser(){

    const [isError, setIsError] = useState(false)
    const [error, setError ] = useState({});
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        setIsError(false);
        setError({});

        
        const controller = new AbortController();
        const {signal} = controller;
        if(!localStorage.getItem('token')){

            fetchUser(signal)
            .then((data) => {
                setUser(data);
                setIsLoggedIn(true)
            })
            .catch(e=>{
                if (signal.aborted) return //if its signal abort error ignore it because we set it
                setIsError(true)
                setError({message: e.message})
            })
        }
    return ()=> controller.abort()

    },[]);

    return {isError, error,user}
}