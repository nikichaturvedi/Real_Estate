'use client'; 

import Link from 'next/link';

export default function AboutHero() {
    return (
      <section
        className="mt-20 bg-cover bg-center h-[50vh]  flex flex-col items-center justify-center relative" 
        style={{ backgroundImage: "url('/about3.jpg')" }}
      >
        <div className="text-white text-center mt-20 flex flex-col lg:flex-row z-10 mb-6">
          <div className="bg-[#bda049] p-3 opacity-85">
            <h2 className="text-4xl font-bold">About Us</h2>
          </div>
          <div className="bg-[#7b8aa0]  p-3 opacity-85">
            <h2 className="text-md mt-2 font-bold">
                <Link className='hover:text-[#7e6a30]' href="/">Home</Link>
                 <span className='text-[#7a6b3e]'> / </span>
                  <span className='hover:text-[#7e6a30]'>About Us</span></h2>
          </div>
        </div>
      </section>
    );
  }