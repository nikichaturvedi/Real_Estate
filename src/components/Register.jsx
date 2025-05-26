'use client';

import { useContext, useState } from 'react';
import Image from 'next/image';
import {
  FaCamera, FaEnvelope, FaPhone, FaUser, FaLock,
  FaMapMarkerAlt, FaBuilding
} from 'react-icons/fa';
import axiosInstance from './config/axiosInstace';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const { showAlert } = useContext(AuthContext)
  const [role, setRole] = useState('user');
  const router = useRouter()
  const [preview, setPreview] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.repassword.value) {
      alert(`Passwords don't match`);
      return;
    }

    const formData = new FormData();
    if (e.target.profile_Photo) {
      formData.append('profile_Photo', e.target.profile_Photo.files[0] ?? null);
    }
    formData.append('name', e.target.name.value);
    formData.append('email', e.target.email.value);
    formData.append('phone', e.target.phone.value);
    formData.append('password', e.target.password.value);
    formData.append('role', role);
    formData.append('location', e.target.location.value);
    if (role == 'agent') {
      formData.append('company', e.target.company.value);
    }

    try {
      const response = await axiosInstance.post('/user/create', formData);
      showAlert(response.data.status, response.data.msg);
      if (response.data.status == 1) {
        router.push('LogIn')
        e.target.reset()
      }

    } catch (error) {
      console.log(error);
    }


  };

  const renderInput = (name, placeholder, icon, type = 'text') => (
    <div className="relative">
      <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required={['name', 'email', 'phone', 'password', 'repassword'].includes(name)}
      />
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      <div className="hidden md:block md:w-1/2 relative">
        <Image src="/card2.jpg" alt="Side illustration" fill className="object-cover" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-6 bg-gray-50">
        <div className="w-full max-w-lg">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-700">Create an Account</h2>
            <p className="text-gray-500 text-sm mt-2">Choose a role and fill in your details</p>
          </div>


          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative group">
                <img
                  src={preview || 'https://via.placeholder.com/150?text=Profile+Photo'}
                  alt="Profile preview"
                  className="h-28 w-28 text-center p-2 rounded-full object-cover border-4 border-blue-200 shadow-md"
                />
                <label
                  htmlFor="profile_Photo"
                  className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer"
                >
                  <FaCamera className="text-blue-600" />
                </label>
                <input
                  type="file"
                  id="profile_Photo"
                  name="profile_Photo"
                  className="hidden"
                  onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">Upload a profile photo</p>
            </div>
            <div className="flex justify-center">
              <select
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-400 p-2 rounded-md text-gray-700"
              >
                <option value="user">User</option>
                <option value="agent">Agent</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {renderInput('name', 'Full Name', <FaUser />)}
              {renderInput('email', 'Email', <FaEnvelope />, 'email')}
              {renderInput('phone', 'Phone Number', <FaPhone />, 'tel')}
              {renderInput('password', 'Password', <FaLock />, 'password')}
              {renderInput('repassword', 'Confirm Password', <FaLock />, 'password')}
              {renderInput('location', 'Location', <FaMapMarkerAlt />)}
              {role === 'agent' && renderInput('company', 'Company Name', <FaBuilding />)}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
