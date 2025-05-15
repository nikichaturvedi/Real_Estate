'use client'; 

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md border-b-4 border-b-[#BFA249] px-8 py-6 flex items-center justify-between ">
    
      <div className="text-2xl font-bold text-black-600">
        <Link href="/">Real Estate Website</Link>
      </div>

      <ul className="hidden lg:flex gap-6  text-gray-700 font-bold  ">
        <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249] '><Link href="/">Home</Link></li>
        <li  className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'><Link href="/JaipurProperties">Property in Jaipur</Link></li>
        <li  className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'><Link href="/Services">Service Offered</Link></li>
        <li  className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'><Link href="/Blogs">Blog</Link></li>
        <li  className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'><Link href="/Contact">Contact</Link></li>
      </ul>

      <div className="hidden lg:flex space-x-4">
        
        <Link href="/Rent-sell" className="bg-[#BFA249] underline-offset-8 text-white px-3 py-1  hover:bg-[#9E8437] font-bold underline decoration-amber-50 hover:underline-offset-8 ">+ Sell / Rent Property</Link>
      
      </div>


      <button
        className="lg:hidden text-[#BFA249] px-2 rounded border border-[#BFA249] hover:bg-[#9E8437] hover:text-stone-100 active:bg-[#9E8437] transition duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t lg:hidden">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/JaipurProperties" onClick={() => setIsMobileMenuOpen(false)}>Property in Jaipur</Link></li>
            <li><Link href="/Services" onClick={() => setIsMobileMenuOpen(false)}>Service Offered</Link></li>
            <li><Link href="/Blogs" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/Rent-sell" onClick={() => setIsMobileMenuOpen(false)}>+ Sell / Rent Property</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}