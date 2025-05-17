import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: 'https://admin-property.onrender.com',
 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
   
  }
});
 
// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      // Handle unauthorized errors, e.g., redirect to login page
    }
    return Promise.reject(error);
  }
);
 
export default axiosInstance;
 