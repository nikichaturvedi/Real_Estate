
import React from 'react';
import { FaHome, FaDollarSign, FaTools, FaChartLine, FaKey, FaGavel, FaUniversity, FaChartBar } from 'react-icons/fa';
const services = [
  {
    title: 'Buying Property',
    description: 'We help you find and purchase your dream home.',
    icon: <FaHome className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
  {
    title: 'Selling Property',
    description: 'Get the best value when selling your property.',
    icon: <FaDollarSign className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
  {
    title: 'Property Management',
    description: 'We take care of your property so you don’t have to.',
    icon: <FaTools className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },

];

const HomeServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-600 underline underline-offset-8 decoration-[#BFA249] decoration-4">Deals That Delivery</h2>
         
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition hover:shadow-2xl "
            >
              <div className="text-4xl mb-4 hover:text-[#ac9552]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
