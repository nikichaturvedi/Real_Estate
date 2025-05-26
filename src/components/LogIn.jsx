'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axiosInstance from './config/axiosInstace';
import Swal from 'sweetalert2';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/app/redux/reducer/userSlice';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';


export default function Login() {
  const router = useRouter()
  const searchUrl = useSearchParams();
  const dispatch = useDispatch()
  const { showAlert } = useContext(AuthContext);


  const loginhendler = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const formData = {
      email: email.value,
      password: password.value
    }
    const response = await axiosInstance.post('user/login', formData);
    showAlert(response.data.status, response.data.msg);
    if (response.data.status == 1) {
      dispatch(login({
        userToken: response.data.userToken
      }))

      setTimeout(() => {
        if (searchUrl.get('redirect')) {
          router.push(`${searchUrl.get('redirect')}`);
        } else {
          router.push('/');
        }
      }, 1000);

    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 hidden md:block relative">
        <Image
          src="/house6.jpg"
          alt="Login illustration"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-10">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Welcome Back</h2>
          <p className="text-sm text-gray-500 text-center mb-6">Login to your account to continue</p>
          <form className="space-y-4" onSubmit={loginhendler}>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name='email'
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#4270a5]"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name='password'
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#4270a5]"
              />
            </div>
            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-[#527baa] hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#527baa] text-white py-2  cursor-pointer rounded-4xl hover:bg-[#51728d] transition font-semibold"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{' '}
            <Link href="/register" className="text-[#4270a5] hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
