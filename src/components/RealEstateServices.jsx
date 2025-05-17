'use client';
import Link from 'next/link';
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
  {
    title: 'Real Estate Consultation',
    description: 'Expert advice for your property investments.',
    icon: <FaChartLine className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
  {
    title: 'Rental Services',
    description: 'Find quality tenants and manage rental agreements.',
    icon: <FaKey className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
  {
    title: 'Legal Support',
    description: 'Legal documentation and due diligence made easy.',
    icon: <FaGavel className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
  {
    title: 'Mortgage Assistance',
    description: 'We help you get the best mortgage deals.',
    icon: <FaUniversity className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
  {
    title: 'Property Valuation',
    description: 'Know the true value of your property in the market.',
    icon: <FaChartBar className="text-5xl text-[#7fa5db] hover:text-[#ac9552] mx-auto mb-4" />,
  },
];

const RealEstateServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Real Estate Services</h2>
          <p className="mt-4 text-gray-600">
            We offer a wide range of services to help you buy, sell,
            or manage property with ease. Whether you're a first-time homebuyer,
            an experienced investor, or looking to sell your property quickly and at the best value,
            our team is here to guide you every step of the way. From property listings and market analysis to negotiations
            and closing, we handle it all with professionalism and care. We also provide property management solutions
            tailored to your needs,ensuring your investment remains profitable and stress-free.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
        <div className="mt-12 text-center">
          <Link
            href="/Contact"
            className="bg-[#ac9552] text-lg text-white px-4 py-3 rounded-md hover:bg-[#887a52] transition inline-block"
          >
            Contact us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default RealEstateServices;
