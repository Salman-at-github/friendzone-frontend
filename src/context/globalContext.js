// GlobalContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    // Implement any other logout logic (e.g., clearing the token)
  };


  return (
    <GlobalContext.Provider value={{ user, setUser, logout, posts, setPosts }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
