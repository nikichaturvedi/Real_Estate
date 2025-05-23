'use client'
import axiosInstance from "@/components/config/axiosInstace";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { use, useEffect, useState } from "react"
import { FaHeart } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function details({ params }) {
    const { id } = use(params);
    const [property, setProperty] = useState();
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        view_Property();
        checkIfLiked();
    }, []);

    const view_Property = async () => {
        try {
            const response = await axiosInstance.get(`/property/read?id=${id}`);
            setProperty(response.data.allProperty);
        } catch (error) {
            console.log(error);
        }
    };

    const checkIfLiked = () => {
        const stored = JSON.parse(localStorage.getItem('likedProperties') || '[]');
        const isLiked = stored.some((item) => item._id === id);
        setLiked(isLiked);
    };

    const toggleLike = () => {
        const stored = JSON.parse(localStorage.getItem('likedProperties') || '[]');
        let updated;

        if (liked) {
            // Remove from liked
            updated = stored.filter((item) => item._id !== id);
        } else {
            // Add to liked
            if (property) {
                updated = [...stored, property];
            }
        }

        localStorage.setItem('likedProperties', JSON.stringify(updated));
        setLiked(!liked);
    };


    const sliderSettings = {
        dots: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const imageArray = Array.isArray(property?.maltipleImage)
        ? [...new Set(property.maltipleImage.map(img => img.trim()))]
        : typeof property?.maltipleImage === 'string'
            ? [...new Set(property.maltipleImage.split(',').map(img => img.trim()))]
            : [];



    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-2.5 md:px-6 pt-30 md:pt-35 py-10 overflow-x-hidden">
                <div className="w-full">
                    {imageArray.length > 0 && (
                        imageArray.length === 1 ? (
                            <div className="relative w-full h-52 sm:h-96 mb-6">
                                <img
                                    src={imageArray[0]}
                                    alt="Property Image"
                                    className="w-full rounded-lg h-full object-cover"
                                />
                                <h1 className="absolute top-4 left-4 sm:text-2xl font-bold text-white px-2 py-1 rounded">
                                    {property?.title}
                                </h1>
                                <button
                                    onClick={toggleLike}
                                    className="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow hover:scale-110 transition-transform"
                                    aria-label="Like"
                                >
                                    <FaHeart className={`text-xl ${liked ? 'text-red-500' : 'text-white'}`} />
                                </button>
                            </div>
                        ) : (
                            <Slider {...sliderSettings} className="mb-6 rounded-lg [&_.slick-dots]:!block [&_.slick-dots]:bottom-2 [&_.slick-dots]:z-10">
                                {imageArray.map((img, index) => (
                                    <div key={index} className="relative w-full h-52 sm:h-96">
                                        <img
                                            src={img}
                                            alt={`Property Image ${index + 1}`}
                                            className="w-full rounded-lg h-full object-cover"
                                        />
                                        {index === 0 && (
                                            <>
                                                <h1 className="absolute top-4 left-4 sm:text-2xl font-bold text-white px-2 py-1 rounded">
                                                    {property?.title}
                                                </h1>
                                                <button
                                                    onClick={toggleLike}
                                                    className="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow hover:scale-110 transition-transform"
                                                    aria-label="Like"
                                                >
                                                    <FaHeart className={`text-xl ${liked ? 'text-red-500' : 'text-white'}`} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </Slider>
                        )
                    )}

                    <div className="mb-6 flex flex-col md:flex-row md:space-x-4 text-sm text-gray-700">
                        <div className="space-y-1">
                            <p className="text-gray-500">
                                <span className="font-semibold">Location:</span> {property?.area}, {property?.city}, {property?.state}
                            </p>
                            <p className="text-[#BFA249]">
                                <span className="text-gray-500 font-semibold">Price:</span> ₹{property?.price}
                            </p>
                        </div>

                        <div className="space-y-1 md:ml-4">
                            <p>
                                <span className="text-gray-500 font-semibold">By:</span> {property?.user?.company}
                            </p>
                            <p>
                                <span className="text-gray-500 font-semibold">Status:</span> {property?.status}
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700 mb-3 sm-mb-6">{property?.long_description}</p>


                    <div className="grid grid-cols-1  md:grid-cols-3 gap-8 mt-12">
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
                                                {property?.title}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Location</td>
                                            <td className="py-4 px-6 text-gray-800"> {property?.area}, {property?.city}, {property?.state}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Area Size</td>
                                            <td className="py-4 px-6 text-gray-800">2,500 sq ft</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Price</td>
                                            <td className="py-4 px-6 text-[#BFA249] font-bold text-lg">
                                                ₹{property?.price}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Category</td>
                                            <td className="py-4 px-6 text-gray-800">{property?.category}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Property Type</td>
                                            <td className="py-4 px-6 text-gray-800">{property?.propertyType}</td>
                                        </tr>
                                        <tr className="transition hover:bg-gray-100 ">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Year Built</td>
                                            <td className="py-4 px-6 text-gray-800">{property?.createdAt}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

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
    )
}