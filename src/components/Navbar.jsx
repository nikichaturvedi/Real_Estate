'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { FaHeart } from 'react-icons/fa';

import { FiHeart } from 'react-icons/fi';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();


  // Check login status on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, []);


  const handleRentSellClick = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userDetails'));
    if (isLoggedIn) {
      router.push('/Rent-sell');
    } else {
      router.push('/LogIn?redirect=Rent-sell');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md border-b-4 border-b-[#BFA249] px-8 py-6 flex items-center justify-between">




      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/real-estate-logo.jpg"
          alt="Real Estate Logo"
          width={150}
          height={100}
          priority
          className="object-contain h-auto"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 text-gray-700 font-bold">
        <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'>
          <Link href="/">Home</Link>
        </li>
        <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'>
          <Link href="/JaipurProperties">Property in Jaipur</Link>
        </li>
        <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'>
          <Link href="/Services">Service Offered</Link>
        </li>
        <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'>
          <Link href="/Blogs">Blog</Link>
        </li>
        <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'>
          <Link href="/Contact">Contact</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button
              onClick={handleLogout}
              className='text-red-600 hover:bg-gray-200 p-2 font-bold'
            >
              Log out
            </button>
          </li>
        ) : (
          <li className='text-gray-500 hover:bg-gray-200 p-2 underline decoration-amber-50 hover:underline-offset-5 hover:decoration-[#BFA249]'>
            <Link href="/LogIn">Log in</Link>
          </li>
        )}
      </ul>


      <div className="hidden lg:flex space-x-4 items-center">
        <Link href="/liked-properties" className="text-[#BFA249] hover:text-red-600 text-xl" title="Liked Properties">
          <FiHeart />
        </Link>
        <button
          onClick={handleRentSellClick}
          className="bg-[#BFA249] underline-offset-8 text-white px-3 py-1 cursor-pointer hover:bg-[#9E8437] font-bold underline decoration-amber-50 hover:underline-offset-8"
        >
          + Sell / Rent Property
        </button>
      </div>



      {/* Mobile Menu Icon */}

      <div className="lg:hidden flex items-center space-x-3">
        <Link href="/liked-properties" className="text-[#BFA249] text-xl hover:text-red-600" title="Liked Properties">
          <FiHeart />
        </Link>
        <button
          className="text-[#BFA249] px-2 rounded border border-[#BFA249] hover:bg-[#9E8437] hover:text-stone-100 active:bg-[#9E8437] transition duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

    
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t lg:hidden">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/JaipurProperties" onClick={() => setIsMobileMenuOpen(false)}>Property in Jaipur</Link></li>
            <li><Link href="/Services" onClick={() => setIsMobileMenuOpen(false)}>Service Offered</Link></li>
            <li><Link href="/Blogs" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>

            <li><Link href="/LogIn" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link></li>

            {isLoggedIn ? (
              <li>
                <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}>Log out</button>
              </li>
            ) : (
              <li>
                <Link href="/LogIn" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
              </li>
            )}

            <li>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleRentSellClick();
                }}
                className="text-left"
              >
                + Sell / Rent Property
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
