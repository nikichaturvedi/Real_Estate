'use client';

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactDetail() {
  return (
    <div className="bg-white px-6 md:px-8 pb-8  w-full  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-center w-full">
        {/* Address */}
        <div className="flex flex-col items-center bg-[#d3d1ca] sm:py-12 py-2 w-full hover:bg-[#b9b8b5] shadow-xl rounded-xl">
          <MapPinIcon className="w-14 h-14 text-[#a38a3e] mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Address</h3>
          <p className="text-gray-600 text-lg">123 Main Street<br />City, Country 12345</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-[#d3d1ca] sm:py-12 py-4 w-full hover:bg-[#b9b8b5] shadow-xl rounded-xl">
          <PhoneIcon className="w-14 h-14 text-[#a38a3e] mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Phone</h3>
          <p className="text-gray-600 text-lg">+1 (234) 567-8901</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-[#d3d1ca] sm:py-12 py-4 w-full hover:bg-[#b9b8b5] shadow-xl rounded-xl">
          <EnvelopeIcon className="w-14 h-14 text-[#a38a3e] mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Email</h3>
          <p className="text-gray-600 text-lg">info@example.com</p>
        </div>
      </div>
    </div>
  );
}
