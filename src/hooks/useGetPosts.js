import { useState, useEffect } from "react";
import { getPosts } from "../api/fetchPosts";
import { generateRandomId, getCurrentTime } from "../utils/helpers";
import { useGlobal } from "../context/globalContext";

export default function useGetPosts(page = 1, limit = 5){

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [error, setError ] = useState({});
    const [hasMore, setHasMore] = useState(false)
    
    const {posts, setPosts} = useGlobal()
    
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

    const addPostLocally = (title, content, userID) => {
        const newPost = {
            _id: generateRandomId(),
            title: title,
            content: content,
            user: userID,
            createdAt: getCurrentTime()
        };
        setPosts(prevPosts => [newPost, ...prevPosts]);
    
    };

    return {loading,isError, error,posts,hasMore, addPostLocally}
}