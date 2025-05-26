'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import axiosInstance from './config/axiosInstace';
import Swal from 'sweetalert2';
import { AuthContext } from '@/context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { lsDataUpdate } from '@/app/redux/reducer/userSlice';

const LikeButton = ({ property }) => {
  const { showAlert } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const router = useRouter()
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  // let userDetails;
  // let likedProperties;
  // useEffect(() => {
  //   const likedProperties = JSON.parse(localStorage.getItem('likedProperties') || '[]');
  //   const isLiked = likedProperties.some(item => item._id === property._id);
  //   setLiked(isLiked);
  // }, [property]);

  const toggleLike = async () => {
    if (!user) {
      router.push('/LogIn')
    }
    const data = {
      userId: user._id,
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
        dispatch(lsDataUpdate({ user: response.data.user }))
        // const updateUser = response.data.user
        // localStorage.setItem('userDetails', JSON.stringify(updateUser));
        setLiked(user.likedProperties.some(data => data._id == property._id));
      }

    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    // const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (user && user.likedProperties?.some(data => data._id == property._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [property._id, user?.likedProperties]);

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
