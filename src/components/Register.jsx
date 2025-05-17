'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaCamera, FaEnvelope, FaPhone, FaUser, FaLock, FaUserTag,
  FaMapMarkerAlt, FaBuilding, FaHome, FaStar
} from 'react-icons/fa';

export default function RegisterForm() {
  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    name: '',
    profile_Photo: null,
    password: '',
    repassword: '',
    phone: '',
    email: '',
    location: '',
    company: '',
    property: '',
    rating: '',
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_Photo') {
      const file = files[0];
      setFormData({ ...formData, profile_Photo: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = new FormData();

    if (formData.password !== formData.repassword) {
      alert('Passwords do not match');
      return;
    }

    Object.entries(formData).forEach(([key, val]) => {
      if (role === 'user' && ['company', 'property', 'rating'].includes(key)) return;
      if (key === 'repassword') return; // Do not send repassword
      dataToSubmit.append(key, val);
    });

    for (let pair of dataToSubmit.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  const renderInput = (name, placeholder, icon, type = 'text') => (
    <div className="relative">
      <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 border border-gray-400 p-2 rounded-md placeholder-gray-400"
        required={['name', 'email', 'phone', 'password', 'repassword'].includes(name)}
      />
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/3 relative">
        <Image src="/card2.jpg" alt="Login illustration" fill className="object-cover" />
      </div>

      <div className="w-full md:w-2/3 flex items-center justify-center bg-gray-50 md:px-6 py-10">
        <div className="w-full px-4">
          <div className="flex flex-col items-center mb-6 relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#527baa] pb-4 text-center">Set up your account</h2>
            <div className="relative group cursor-pointer">
              <img
                src={preview || 'https://via.placeholder.com/150?text=Profile+Photo'}
                alt=""
                className="h-32 w-32 rounded-full object-cover border-4 border-blue-300"
              />
              <label
                htmlFor="profile_Photo"
                className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
              >
                <FaCamera className="text-[#527baa] text-lg" />
              </label>
            </div>
            <input
              type="file"
              id="profile_Photo"
              name="profile_Photo"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <p className="text-sm mt-2 text-gray-500">Click camera icon to upload</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center">
              <select
                value={role}
                onChange={handleRoleChange}
                className="border border-gray-500 p-2 rounded-md w-1/2 sm:w-1/3"
              >
                <option value="user">User</option>
                <option value="agent">Agent</option>
              </select>
            </div>

            <div
              className={`grid gap-4 ${
                role === 'agent'
                  ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {renderInput('name', 'Full Name', <FaUser />)}
              {renderInput('email', 'Email', <FaEnvelope />, 'email')}
              {renderInput('phone', 'Phone', <FaPhone />, 'tel')}
              {renderInput('password', 'Password', <FaLock />, 'password')}
              {renderInput('repassword', 'Re-enter Password', <FaLock />, 'password')}
              {renderInput('location', 'Location', <FaMapMarkerAlt />)}

              {role === 'agent' && (
                <>
                  {renderInput('company', 'Company', <FaBuilding />)}
                  {renderInput('property', 'Property', <FaHome />)}
                </>
              )}
            </div>

            {role === 'agent' ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {renderInput('rating', 'Rating (0-5)', <FaStar />, 'number')}
                <button
                  type="submit"
                  className="bg-[#527baa] hover:bg-[#42689a] text-white py-2 px-4 rounded-md font-semibold text-lg transition w-full"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#527baa] hover:bg-[#42689a] text-white py-2 px-6 rounded-md font-semibold text-lg transition"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
