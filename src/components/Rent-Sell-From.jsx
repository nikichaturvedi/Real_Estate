'use client';
import Link from 'next/link';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RentSellForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Redirect to login if not logged in
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('userDetails'));
    if (!isLoggedIn) {
      router.push('/LogIn?redirect=/Rent-sell');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      contact: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
          <div className="py-6 px-3 sm:px-6 rounded-sm">
            <h2 className="text-3xl text-center font-bold mb-6 text-gray-600 underline underline-offset-8 decoration-[#BFA249] decoration-2">
              Submit Your Property for Sale or Rent
            </h2>
            <p className="text-center mb-6 text-gray-400">
              Please provide the necessary details below to sell or rent your property.
            </p>
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="md:flex md:space-x-4 space-y-5 md:space-y-0">
                <div className="md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
                <div className="md:w-1/2">
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="Contact Number"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-4 space-y-5 md:space-y-0">
                <div className="md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
                <div className="md:w-1/2">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border text-gray-500 border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="submit-for-sell">Submit Property for Sell</option>
                    <option value="submit-for-rent">Submit Property for Rent</option>
                    <option value="submit-for-joint">Submit Property for Joint</option>
                    <option value="submit-for-other">Other Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Message"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#a38a3e] text-white px-4 py-2 rounded-md hover:bg-[#8e7833] transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
