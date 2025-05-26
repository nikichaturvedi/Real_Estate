
"use client"
import { useContext, useEffect, useRef, useState } from 'react';
import axiosInstance from './config/axiosInstace';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import SearchProperty from './SearchProperty';
export default function Hero() {
  const { view_Property, property } = useContext(AuthContext);

  const [currentIndex, setCurrentIndex] = useState(0);


  const [images, setImage] = useState([])


  // view banner part
  const view_Banner = async () => {
    try {
      const response = await axiosInstance.get('/banner/read');
      setImage(response.data.allBanner)

    } catch (error) {
      console.log(error);

    }
  }

  const All_Banner = images?.filter(data => data.isPublished == true || [])

  useEffect(
    () => {
      view_Property();
      view_Banner()
    }, []
  )

  useEffect(() => {
    if (!All_Banner || All_Banner.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % All_Banner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [All_Banner]);


  return (
    <section
      className="mt-20 w-full bg-cover bg-center bg-no-repeat h-[60vh] flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url('${All_Banner[currentIndex]?.bannerImage || "/placeholder.jpg"}')`,
      }}
    >

      <div className="text-white text-center mt-5 md:mt-20 flex flex-col md:flex-row z-10 mb-6">
        <div className="bg-[#8a98ad] p-3 opacity-85">
          <h2 className="text-4xl font-bold">Luxury</h2>
        </div>
        <div className="bg-[#BFA249] p-3 opacity-85">
          <h2 className="text-4xl font-bold">Property in Jaipur</h2>
        </div>
      </div>


      <div className="bg-white bg-opacity-90 px-8 py-6 opacity-85 rounded shadow-lg z-10">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-[#8a98ad]">Discover Your Dream Home</h1>
        </div>
        <SearchProperty property={property} />
      </div>
    </section>
  );
}
