'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Statistics from '@/components/Statistics';
import { FaHeart } from 'react-icons/fa';

export default function LikedPropertiesPage() {
  const [likedProperties, setLikedProperties] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    setLikedProperties(stored);
  }, []);

  const removeFromLiked = (id) => {
    const updated = likedProperties.filter((property) => property._id !== id);
    setLikedProperties(updated);
    localStorage.setItem('likedProperties', JSON.stringify(updated));
  };

  if (likedProperties.length === 0) {
    return (
      <>
        <Navbar />
        <div className="text-center pt-60 pb-36">
          <h2 className="text-xl font-semibold">No liked properties yet</h2>
          <p className="text-gray-500 mt-2">Explore properties and tap ❤️ to save them here.</p>
          <Link href="/" className="mt-4 inline-block text-[#51728d] underline">Back to Home</Link>
        </div>
        <Statistics />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <h1 className="text-xl md:text-2xl font-bold md:pt-40 md:pb-3 pt-35 text-center underline underline-offset-8 decoration-[#BFA249] mb-8">
        Your Favorite Properties{' '}
        <FaHeart className="inline text-red-700 text-sm md:text-base" />
      </h1>

      <div className="px-3 md:px-6 md:pb-7 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedProperties.map((data) => (
          <div
            key={data._id}
            className="bg-white shadow-md rounded-lg overflow-x-hidden overflow-hidden transition-transform duration-300 hover:scale-105 relative"
          >
            {/* Remove Button */}
            <button
              onClick={() => removeFromLiked(data._id)}
              className="absolute top-2 right-2 z-10 bg-white/80 p-1.5 rounded-full shadow hover:scale-110 transition-transform"
              title="Remove from liked"
            >
              <FaHeart className="text-xl text-red-500" />
            </button>

            <div className="relative h-36 sm:h-48 w-full">
              <Image
                src={data.mainImage || '/default.jpg'}
                alt={data.title || 'Property Image'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{data.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{data.area}, {data.city}, {data.state}</p>
              <p className="text-lg font-bold text-[#BFA249] mb-2">₹{data.price}</p>
              <p className="text-sm text-gray-700 mb-2">{data.short_description}</p>
              <Link
                href={`/propertyDetails/${data._id}`}
                className="text-sm text-[#346297] underline underline-offset-2"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Statistics />
      <Footer />
    </>
  );
}
