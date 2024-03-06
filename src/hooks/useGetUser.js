import { useState, useEffect } from "react";
import { fetchUser } from "../api/fetchUser";
import { useGlobal } from "../context/globalContext";

export default function useGetUser(){

    const [isError, setIsError] = useState(false)
    const [error, setError ] = useState({});
    const {user, setUser} = useGlobal();

    useEffect(()=>{
        setIsError(false);
        setError({});

        
        const controller = new AbortController();
        const {signal} = controller;

            fetchUser(signal)
            .then((data) => {
                setUser(data);
            })
            .catch(e=>{
                if (signal.aborted) return //if its signal abort error ignore it because we set it
                setIsError(true)
                setError({message: e.message})
            })
        
    return ()=> controller.abort()

    },[]);

    return {isError, error,user}
}