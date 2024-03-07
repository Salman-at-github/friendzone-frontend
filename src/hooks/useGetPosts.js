import { useState, useEffect } from 'react';
import { getPosts } from '../api/fetchPosts';
import { getCurrentTime } from '../utils/helpers';
import { useGlobal } from '../context/globalContext';

export default function useGetPosts(page = 1, limit = 5) {
  const [loading, setLoading] = useState(true);
  const [unauthorized, setUnauthorized] = useState(false);
  const [error, setError] = useState({});
  const [hasMore, setHasMore] = useState(false);
  const { posts, setPosts } = useGlobal();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError({});

      try {
        const response = await getPosts(page, limit);

        if (response.status === 401) {
          setUnauthorized(true);
          return;
        }
        setPosts(response.data.results); // Replace existing posts with new ones
        setHasMore(page < response.data.totalPages);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        if (e.name !== 'AbortError') {
          setError({ message: e.message });
        }
      }
    };

    fetchData();
  }, [page]);

  const addPostLocally = (title, content, userID, author) => {
    const newPost = {
      title: title,
      content: content,
      user: userID,
      author: author,
      createdAt: getCurrentTime(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return { loading, error, posts, hasMore, unauthorized, addPostLocally };
}
