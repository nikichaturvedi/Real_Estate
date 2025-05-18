'use client';

import { useState, useEffect } from 'react';
import axiosInstance from '@/components/config/axiosInstace';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Statistics from '@/components/Statistics';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function PropertyDetail({ initialProperty }) {
  const [property, setProperty] = useState(initialProperty);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axiosInstance.get(`/property/read?id=${initialProperty.id}`);
        if (response.data?.allProperty) {
          setProperty(response.data.allProperty);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [initialProperty.id]);

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-2.5 md:px-6 pt-30 md:pt-35 py-10">
        {/* Example: Header */}
        <div
          className="w-full h-52 sm:h-96 bg-center bg-cover rounded-lg mb-6 flex items-start justify-start px-6 py-4"
          style={{ backgroundImage: `url(${property.mainImage})` }}
        >
          <h1 className="sm:text-2xl text-md font-bold text-white rounded">
            {property.title}
          </h1>
        </div>

        {/* Address + Price + Description */}
        <p className="text-sm text-gray-500 mb-4">{property.address}</p>
        <p className="text-lg font-bold text-[#BFA249] mb-4">
          {property.area}, {property.city}, {property.state}
        </p>
        <p className="text-gray-700 mb-3 sm-mb-6">{property.short_description}</p>

        {/* Include remaining sections as-is, or split them into subcomponents like <Amenities />, <About />, <Overview /> */}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/Contact"
            className="bg-[#ac9552] text-lg text-white px-4 py-3 rounded-md hover:bg-[#887a52] transition inline-block"
          >
            Contact us
          </Link>
        </div>
      </div>

      <Statistics />
      <Footer />
    </>
  );
}
