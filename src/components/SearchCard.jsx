'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axiosInstance from './config/axiosInstace';
import LikeButton from '../components/LikeButton';

export default function SearchPage() {
  const [propertyData, setPropertyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axiosInstance.get('/property/read');
        setPropertyData(response.data.allProperty);
        setFilteredData(response.data.allProperty);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = () => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = propertyData.filter((item) =>
      item.title.toLowerCase().includes(lowerSearch)
    );
    setFilteredData(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="px-2.5 sm:px-8 lg:px-30 py-35 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center underline decoration-[#BFA249] underline-offset-8">
        Search Results
      </h1>
      <div className="flex flex-row justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full sm:w-1/2 px-4 py-2 font-bold border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BFA249]"
        />
        <button
          onClick={handleSearch}
          className="bg-[#BFA249] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#a88f2d] transition-colors duration-300"
        >
          Search
        </button>
      </div>
      <div className="space-y-10">
        {filteredData.map((data, index) => (
          <div
            key={data._id}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl opacity-0 animate-slide-up"
            style={{
              animationDelay: `${index * 200}ms`, 
              animationDuration: '2s',
              animationFillMode: 'forwards',
            }}
          >
            <div className="relative w-full md:w-1/2 h-48 md:h-auto group overflow-hidden">
              <LikeButton property={data} />
              <Image
                src={data.mainImage || '/default.jpg'}
                alt={data.title || 'Property Image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-3">
              <div>
                <h2 className="text-2xl font-bold text-[#BFA249]">{data.title}</h2>
                <p className="text-sm text-gray-500">
                  {data.area}, {data.city}, {data.state}
                </p>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  ₹{data.price.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-600 mt-2">{data.short_description}</p>
              </div>
              <div className="pt-2">
                <Link
                  href={`/propertyDetails/${data._id}`}
                  className="text-sm text-[#346297] hover:text-indigo-800 underline underline-offset-4 decoration-[#346297] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation-name: slide-up;
          animation-timing-function: ease-out;
        }
      `}</style>
    </div>
  );
}
