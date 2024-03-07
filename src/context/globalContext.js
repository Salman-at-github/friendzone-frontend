// GlobalContext.js
import { createContext, useContext, useState } from 'react';
import { useShowToast } from '../hooks/useShowToast';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])

  const showToast = useShowToast() 
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    showToast('success',"Logged out")
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
