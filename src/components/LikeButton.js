'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import axiosInstance from './config/axiosInstace';
import Swal from 'sweetalert2';

const LikeButton = ({ property }) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter()

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
    });

  };
  let userDetails;
  let likedProperties;
  // useEffect(() => {
  //   const likedProperties = JSON.parse(localStorage.getItem('likedProperties') || '[]');
  //   const isLiked = likedProperties.some(item => item._id === property._id);
  //   setLiked(isLiked);
  // }, [property]);

  const toggleLike = async () => {
    userDetails = JSON.parse(localStorage.getItem('userDetails'))
    likedProperties = userDetails?.likedProperties.filter(data => data == property._id)
    if (!userDetails) {
      router.push('/LogIn')
    }
    const data = {
      userId: userDetails._id,
      propertyId: property._id
    }
    try {
      let API;
      if (!liked) {
        API = 'add-to-like'
      } else {
        API = 'remove-to-like'
      }
      const response = await axiosInstance.post(`/user/${API}`, data);
      showAlert(response.data.status, response.data.msg)
      if (response.data.status == 1) {
        localStorage.setItem('userDetails', JSON.stringify(response.data.user));
        setLiked(response.data.user.likedProperties.includes(property._id));
      }

    } catch (error) {

    }
  };
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.likedProperties?.includes(property._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [property._id]);
  return (
    <button
      onClick={toggleLike}
      className="absolute top-2 right-2 z-10 bg-white/80 p-1.5 rounded-full cursor-pointer shadow hover:scale-110 transition-transform"
    >
      <FaHeart className={`text-xl ${liked ? 'text-red-500' : 'text-gray-300'}`} />
    </button>
  );
};

export default LikeButton;
