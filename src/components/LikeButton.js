'use client';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = ({ property }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedProperties = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    const isLiked = likedProperties.some(item => item._id === property._id);
    setLiked(isLiked);
  }, [property]);

  const toggleLike = () => {
    const likedProperties = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    let updatedLikedProperties;

    if (liked) {
      updatedLikedProperties = likedProperties.filter(item => item._id !== property._id);
    } else {
      updatedLikedProperties = [...likedProperties, property];
    }

    localStorage.setItem('likedProperties', JSON.stringify(updatedLikedProperties));
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className="absolute top-2 right-2 z-10 bg-white/80 p-1.5 rounded-full shadow hover:scale-110 transition-transform"
    >
      <FaHeart className={`text-xl ${liked ? 'text-red-500' : 'text-gray-300'}`} />
    </button>
  );
};

export default LikeButton;
