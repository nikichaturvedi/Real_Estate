'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
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
          <form className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#4270a5]"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
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
              className="w-full bg-[#527baa] text-white py-2 rounded-4xl hover:bg-[#51728d] transition font-semibold"
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
