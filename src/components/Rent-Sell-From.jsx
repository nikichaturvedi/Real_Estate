'use client';
import Link from 'next/link';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from './config/axiosInstace';
import { AuthContext } from '@/context/AuthContext';
import { useSelector } from 'react-redux';

export default function RentSellForm() {
  const { showAlert } = useContext(AuthContext)
  const router = useRouter();
  const user = useSelector(state => state.user.data)


  useEffect(() => {
    if (!user) {
      router.push('/LogIn?redirect=/Rent-sell');
    }
  }, [router, user._id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('mainImage', e.target.mainImage.files[0]);
    for (let img of e.target.maltipleImage.files) {
      formData.append('maltipleImage', img);
    }
    formData.append('title', e.target.title.value);
    formData.append('price', e.target.price.value);
    formData.append('state', e.target.state.value);
    formData.append('city', e.target.city.value);
    formData.append('address', e.target.address.value);
    formData.append('area', e.target.area.value);
    formData.append('category', e.target.category.value);
    formData.append('propertyType', e.target.propertyType.value);
    formData.append('short_description', e.target.short_description.value);
    formData.append('long_description', e.target.long_description.value);
    formData.append('user_Id', user._id);

    try {
      const response = await axiosInstance.post('/property/create', formData);
      showAlert(response.data.status, response.data.msg);
      if (response.data.status == 1) {
        e.target.reset()
      }

    } catch (error) {
      console.log(error);
    }


  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex flex-col rounded-lg overflow-hidden">
          <div className="py-6 px-3 sm:px-6 rounded-sm">
            <h2 className="text-3xl text-center font-bold mb-6 text-gray-600 underline underline-offset-8 decoration-[#BFA249] decoration-2">
              Submit Your Property for Sale or Rent
            </h2>
            <p className="text-center mb-6 text-gray-400">
              Please provide the necessary details below to sell or rent your property.
            </p>


            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 shadow-xl rounded-xl max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Submit a Property</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Title</label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="Enter title"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="text"
                    name="price"
                    required
                    placeholder="Enter price"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="Enter state"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Enter city"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Enter full address"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                  <input
                    type="text"
                    name="area"
                    required
                    placeholder="e.g., 1200 sqft"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    required
                    placeholder="e.g., Residential, Commercial"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select
                  name="propertyType"
                  required
                  className="w-full border text-gray-700 border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                >
                  <option value="">Select property type</option>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                  <option value="rent">Rent</option>
                </select>
              </div>

              {/* Image Uploads */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Main Image</label>
                  <input
                    type="file"
                    name="mainImage"
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Multiple Images</label>
                  <input
                    type="file"
                    name="maltipleImage"
                    multiple
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                <textarea
                  name="short_description"
                  rows="2"
                  required
                  placeholder="Brief summary..."
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Long Description</label>
                <textarea
                  name="long_description"
                  rows="5"
                  required
                  placeholder="Detailed description of the property..."
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#a38a3e] outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#a38a3e] cursor-pointer text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#8e7833] transition duration-200"
                >
                  Submit Property
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </section>
  );
}
