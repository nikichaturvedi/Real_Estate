'use client';

import axiosInstance from '@/components/config/axiosInstace';
import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [property, setProperty] = useState([]);

  const view_Property = async () => {
    try {
      const response = await axiosInstance.get(`/property/read`);
      setProperty(response.data.allProperty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setUser({ loggedIn: true });
    }
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setUser({ loggedIn: true });
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, view_Property, property }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

