import { useState, useEffect } from "react";
import { getPosts } from "../api/fetchPosts";

export default function useGetPosts(page = 1, limit = 5){

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [error, setError ] = useState({});
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(false)

    useEffect(()=>{
        setLoading(true);
        setIsError(false);
        setError({});

        
        const controller = new AbortController();
        const {signal} = controller;
        
        getPosts(page, limit, signal)
        .then((data) => {
            setPosts( prev => [...prev, ...data.results]);
            setHasMore(page < data.totalPages)
            setLoading(false);
        })
        .catch(e=>{
            setLoading(false);
            if (signal.aborted) return //if its signal abort error ignore it because we set it
            setIsError(true)
            setError({message: e.message})
        })
    return ()=> controller.abort()

    },[page]);

    return {loading,isError, error,posts,hasMore}
}