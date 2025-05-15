
import { notFound } from 'next/navigation';
import { properties } from '../../../data/properties';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Statistics from '@/components/Statistics';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default async function PropertyDetail({ params }) {
  const { id } = await params; 
  const property = properties.find((p) => p.id === parseInt(id, 10));

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 mt-16 lg:mt-20 py-10">
        <div className="w-full">

          <div
            className="w-full h-96 bg-center bg-cover rounded-lg mb-6 flex items-start justify-start px-6 py-4"
            style={{ backgroundImage: `url(${property.image})` }}
          >
            <h1 className="text-2xl font-bold text-white rounded">
              {property.title}
            </h1>
          </div>

          <p className="text-sm text-gray-500 mb-4">{property.address}</p>
          <p className="text-lg font-bold text-[#BFA249] mb-4">${property.price}</p>
          <p className="text-gray-700 mb-6">{property.longDescription}</p>


          <div className="grid grid-cols-1  md:grid-cols-3 gap-8 mt-12">
            {/* Left Column: Project Overview */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                Project Overview
              </h2>

              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                      <td className="py-4 px-6 text-gray-500 font-medium w-1/3 bg-gray-100">
                        Project Name
                      </td>
                      <td className="py-4 px-6 text-gray-800 font-semibold bg-gray-100">
                        {property.title}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                      <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Location</td>
                      <td className="py-4 px-6 text-gray-800">{property.address}</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                      <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Area Size</td>
                      <td className="py-4 px-6 text-gray-800">2,500 sq ft</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                      <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Price</td>
                      <td className="py-4 px-6 text-[#BFA249] font-bold text-lg">
                        ${property.price}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                      <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Property Type</td>
                      <td className="py-4 px-6 text-gray-800">Residential</td>
                    </tr>
                    <tr className="transition hover:bg-gray-100 ">
                      <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Year Built</td>
                      <td className="py-4 px-6 text-gray-800">2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column*/}
            <div className=" h-fit">
              <div className="md:col-span-2">
                <h2 className="text-2xl  font-bold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                  Property Search
                </h2>
              </div>
              <div className="p-6 grid grid-cols-1 gap-4 bg-gray-100 rounded-md shadow-md overflow-hidden">
                <select className="w-full px-4 py-3 rounded border focus:outline-none  ">
                  <option>Property For Sale</option>
                  <option>Property On Rent</option>
                </select>
                <select className="w-full px-4 py-3 rounded border focus:outline-none 1 mt-4 ">
                  <option>Property Type</option>
                  <option>Commercial Property</option>
                  <option>- Commerical Plot / Land</option>
                  <option>- Hotel | Guest House | Resort</option>
                  <option>- Indurstial Land</option>
                  <option>- Office Space</option>
                  <option>- Restaurant Space</option>
                  <option>- Apartment | Flat</option>
                  <option>- Farm House</option>
                  <option>- Plot | Land</option>
                </select>
                <select className="w-full px-4 py-3 rounded border focus:outline-none  mt-4 ">
                  <option>Date New to Old</option>
                  <option>Search Property By</option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                  <option>Date Old to New</option>
                </select>
                <button className="w-full bg-[#BFA249] text-white px-4 py-3 rounded mt-8 hover:bg-[#a88e37]">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16">

            <div className="bg-gray-100 rounded-md shadow-md p-6 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-600 mb-6 underline underline-offset-8 decoration-[#BFA249] decoration-2 pb-2">
                About Modern Downtown Condo
              </h2>
              <p className="mb-4">
              Modern Downtown Condo City is a 808 acres integrated residential township developed on
                main Ajmer road express highway by Modern Downtown Condo.
              </p>
              <p className="mb-4">
              Modern Downtown Condo is an impressive mix of plots, built-up bungalows, row houses, and
                condominiums.
              </p>
              <p className="mb-4">
                Spread over 808 acres and developed by Studio u+a of New York, Vatika Infotech City
                brings together the best in design, planning, aesthetics, and execution. It is a
                welcome departure from the hustle and bustle of the city, and yet offers all the
                amenities and facilities to ensure a comfortable and connected lifestyle. For
                instance, the township includes an in-built social and shopping recreational centre
                and a 50-acres large IT park that conforms to the highest in international standards.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-bold">  Modern Downtown Condo City is a 808 acres integrated residential township</span> Includes mix of Residential Plots, Villas, Apartments, Commercial</li>
                <li> <span className='font-bold'>56 Acres</span> IT Special Economic Zone approved by Central Government for IT Companies</li>
                <li><span className='font-bold'>33 Acres </span> Acres reserved only for <span className='font-bold'>Parks </span> Central Park, Lantana Park, Zabrina Park, etc.</li>
                <li><span className='font-bold'>3390 Residential Plots </span> in Vatika Infotech City, Jaipur</li>
                <li>1500 apartments under construction in Jaipur 21, Central Park & others</li>
                <li>300+ villas in Bellevue Residency, Vatika Ivy Homes Jaipur & others</li>
              </ul>
            </div>
          </div>
          {/* Amenities of Vatika Jaipur */}
          <div className="mt-16">

            <div className="bg-gray-100 rounded-md shadow-md p-6 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                Amenities of Modern Downtown Condo
              </h2>
              <div>
                <h3 className="text-lg font-bold text-gray-600 mb-2  underline underline-offset-2 decoration-[#7b8aa0] decoration-1">General</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                    <span>Eco-friendly recycling of wastes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                    <span>Hierarchy of streets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                    <span>In-house power generation capacity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                    <span>Water harvesting systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                    <span>Fiber optics connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                    <span>Broadband, Video surveillance, IPTV/Cable TV</span>
                  </li>

                </ul>
              </div>
              <div className="grid grid-cols-2  md:grid-cols-2 gap-8 mt-4">

                {/* Medical Facilities */}
                <div>
                  <h3 className="text-lg font-bold text-gray-600 mb-2 underline underline-offset-2 decoration-[#7b8aa0] decoration-1">Medical Facilities</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span>Dispensar</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span>Nursing homes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span>Hospitals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> connectivity</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-600 mt-6 mb-2 underline underline-offset-2 decoration-[#7b8aa0] decoration-1">Schools</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Crèche</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Primary school</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> High school</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Special needs school</span>
                    </li>
                  </ul>
                </div>

                {/* Public and Retail Facilities */}
                <div>
                  <h3 className="text-lg font-bold text-gray-600 mb-2 underline underline-offset-2 decoration-[#7b8aa0] decoration-1">Public Facilities</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Jogging tracks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Club house</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span>Swimming pool</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Basketball court</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-600 mt-6 mb-2 underline underline-offset-2 decoration-[#7b8aa0] decoration-1">Retail Facilities</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Departmental stores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Retail shops</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Office spaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#7b8aa0] mt-1 mr-2 flex-shrink-0" />
                      <span> Coffee shop</span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">

            <div className="bg-gray-100 rounded-md shadow-md p-6 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-600 mb-6 underline underline-offset-8 decoration-[#BFA249] decoration-2 pb-2">
              About Us
              </h2>
              <p className="mb-3">
              XYZ is a Real Estate Company doing Marketing & Sales of Vatika Project, Jaipur.
              </p>
              <p className="mb-4">
              Why XYZ Company
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Security of an all check transaction.</li>
                <li> Transparent deals handled with utmost integrity.</li>
                <li>Unbiased Advice to help you find the right property</li>
                <li>Hassle free Transaction.</li>
                <li>One stop solution provider for Real Estate Services including property selection, site visit, booking, documentation and home loan..</li>
                
              </ul>
              </div>
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
      </div>
      <Statistics />
      <Footer />
    </>
  );
}
