'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { FaHeart } from 'react-icons/fa';

import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from './config/axiosInstace';
import { logout, lsDataUpdate } from '@/app/redux/reducer/userSlice';
import { AuthContext } from '@/context/AuthContext';


export default function Navbar() {
  const { showAlert } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch()



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get('/user/read');
        if (response.data.status == 1) {
          dispatch(lsDataUpdate({ user: response.data.users }))
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleRentSellClick = () => {
    if (user) {
      router.push('/Rent-sell');
    } else {
      router.push('/LogIn?redirect=Rent-sell');
    }
  };

  const handleLogout = () => {
    dispatch(logout())
    showAlert(1, "Log Out");
    router.push('/LogIn');
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
        {user ? (
          <li>
            <button
              onClick={handleLogout}
              className='text-red-600 hover:bg-gray-200 p-2 font-bold cursor-pointer'
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


      <div className="hidden lg:flex items-center gap-6">

        <Link
          href="/liked-properties"
          className="relative flex items-center justify-center text-[#BFA249] hover:text-red-600 transition duration-300"
          title="Liked Properties"
        >
          <FiHeart className="text-2xl" />
          {
            user?.likedProperties?.length > 0 ?
              <span className="absolute -top-2 -right-3 animate-bounce bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 shadow-md">
                {user?.likedProperties.length}
              </span> : ""
          }
        </Link>

        <button
          onClick={handleRentSellClick}
          className="px-4 py-1 rounded-lg font-semibold cursor-pointer text-white bg-[#BFA249] border-2 border-[#BFA249] hover:bg-white hover:text-[#BFA249] transition duration-300 shadow-sm hover:shadow-md"
        >
          + Sell / Rent
        </button>

      </div>




      {/* Mobile Menu Icon */}

      <div className="lg:hidden flex items-center space-x-3">
        <Link href="/liked-properties" className="text-[#BFA249] relative text-xl hover:text-red-600" title="Liked Properties">
          <FiHeart />
          {
            user?.likedProperties?.length > 0 ?
              <span className="absolute -top-2 -right-3 animate-bounce bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 shadow-md">
                {user?.likedProperties.length}
              </span> : ""
          }
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

            {user ? (
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
                + Sell / Rent
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
