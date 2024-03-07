import { useState, useEffect } from "react";
import { fetchUser } from "../api/fetchUser";
import { useGlobal } from "../context/globalContext";

export default function useGetUser(path){
    
    const [isError, setIsError] = useState(false)
    const [error, setError ] = useState({});
    const {user, setUser} = useGlobal();

    useEffect(()=>{
        setIsError(false);
        setError({});

        if(path ==="/"){

            fetchUser()
            .then((data) => {
                setUser(data);
            })
            .catch(e=>{
                setIsError(true)
                setError({message: e.message})
            })
        }
    },[]);

    return {isError, error,user}
}