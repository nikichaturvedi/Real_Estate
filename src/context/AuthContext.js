'use client';

import { store } from '@/app/redux/store';
import axiosInstance from '@/components/config/axiosInstace';
import { createContext, useContext, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [property, setProperty] = useState([]);
  const [blog, setBlog] = useState([]);

  const view_Property = async () => {
    try {
      const response = await axiosInstance.get(`/property/read`);
      setProperty(response.data.allProperty);
    } catch (error) {
      console.log(error);
    }
  };

  const view_Blog = async (id = '') => {
    try {
      const response = await axiosInstance.get(`/blog/read?id=${id}`);
      setBlog(response.data.allBlog);
    } catch (error) {
      console.log(error);
    }
  };

  const showAlert = (type, message) => {

    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    toast.fire({
      icon: type == 1 ? 'success' : 'error',
      title: message,
      padding: '10px 20px',
      background: 'gray',
      color: 'white'
    });

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
    <Provider store={store}>
      <AuthContext.Provider value={{ user, login, logout, view_Property, property, view_Blog, blog, showAlert }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

