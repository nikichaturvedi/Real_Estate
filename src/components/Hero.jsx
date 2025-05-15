"use client"
import { useEffect, useState } from 'react';
export default function Hero() {
    const images = [
        '/house.jpg',
        '/house1.jpg',
        '/house2.jpg',
        '/house3.jpg',
        '/house4.jpg',
        '/house6.jpg',
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

    return (
      <section
        className="mt-20 bg-cover bg-center h-[60vh] md:h-[60vh] flex flex-col items-center justify-center relative"
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
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
        <div className=" grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <select className="w-full px-4 py-2 rounded border focus:outline-none outline-1 outline-[#BFA249]" >
            <option>Property For Sale</option>
            <option>Property On Rent</option>
          </select>
          <select className=" w-full px-4 py-2 rounded border focus:outline-none outline-1 outline-[#BFA249]">
            <option>Property Type</option>
            <option>Commercial Property</option>
            <option>- Commerical Plot / Land</option>
            <option>- Hotel | Guest House | Resort</option>
            <option>- Indurstial Land</option>
            <option>- Office Space </option>
            <option>- Restaurant Space</option>
            <option>- Apartment | Flat</option>
            <option>- Farm House</option>
            <option>- Plot | Land</option>
          </select>
          <select className="w-full px-4 py-2 rounded border focus:outline-none outline-1 outline-[#BFA249]">
            <option>Date New to Old</option>
            <option>Search Property By</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Date Old to New</option>
            </select>
          <button className=" w-full bg-[#BFA249] text-white px-14 py-2 rounded hover:bg-[#a88e37]">
            Search
          </button>
        </div>
        </div>
      </section>
    );
  }
  