'use client'
import axiosInstance from "@/components/config/axiosInstace";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { use, useContext, useEffect, useState } from "react"
import { FaHeart } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LikeButton from "@/components/LikeButton";
import SearchProperty from "@/components/SearchProperty";
import { AuthContext } from "@/context/AuthContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


export default function details({ params }) {
    const { view_Property, showAlert } = useContext(AuthContext);
    const user = useSelector(state => state.user.data)
    const { id } = use(params);
    const router = useRouter()
    const [selectProperty, setselectPropert] = useState();
    const [requestType, setRequestType] = useState('buy');
    const [message, setMessage] = useState('');


    const view_Property_Details = async () => {
        try {
            const response = await axiosInstance.get(`/property/read?id=${id}`);
            setselectPropert(response.data.allProperty);
        } catch (error) {
            console.log(error);
        }
    };

    // reques tHendler part
    const requestHendler = async (e) => {
        e.preventDefault();
        if (!user) {
            router.push(`/LogIn?redirect=/propertyDetails/${id}`)
        }
        try {
            const res = await axiosInstance.post('/req/create', {
                property_Id: id,
                propertyOwnerId: selectProperty?.user._id,
                requestType,
                message,
            });
            showAlert(res.data.status, res.data.msg);
            if (res.data.status === 1) {
                setMessage('');
            }
        } catch (err) {
            console.log(err);
        }
    }

    // const checkIfLiked = () => {
    //     const stored = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    //     const isLiked = stored.some((item) => item._id === id);
    //     setLiked(isLiked);
    // };

    // const toggleLike = () => {
    //     const stored = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    //     let updated;

    //     if (liked) {

    //         updated = stored.filter((item) => item._id !== id);
    //     } else {

    //         if (property) {
    //             updated = [...stored, property];
    //         }
    //     }

    //     localStorage.setItem('likedProperties', JSON.stringify(updated));
    //     setLiked(!liked);
    // };


    const sliderSettings = {
        dots: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const imageArray = Array.isArray(selectProperty?.maltipleImage)
        ? [...new Set(selectProperty.maltipleImage.map(img => img.trim()))]
        : typeof selectProperty?.maltipleImage === 'string'
            ? [...new Set(selectProperty.maltipleImage.split(',').map(img => img.trim()))]
            : [];

    useEffect(() => {
        view_Property();
        // checkIfLiked();
        view_Property_Details()
    }, []);


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
                                    {selectProperty?.title}
                                </h1>
                                {/* <LikeButton property={data} /> */}
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
                                                    {selectProperty?.title}
                                                </h1>
                                                {/* <button
                                                    onClick={toggleLike}
                                                    className="absolute top-4 right-4 bg-white/70 p-2 rounded-full shadow hover:scale-110 transition-transform"
                                                    aria-label="Like"
                                                >
                                                    <FaHeart className={`text-xl ${liked ? 'text-red-500' : 'text-white'}`} />
                                                </button> */}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </Slider>
                        )
                    )}

                    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700 bg-white p-4 rounded-md shadow-sm border">
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-gray-500">Location:</span>{" "}
                                {selectProperty?.area}, {selectProperty?.city}, {selectProperty?.state}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-500">Price:</span>{" "}
                                <span className="text-[#BFA249] font-semibold">₹{selectProperty?.price}</span>
                            </p>
                            <p>
                                <span className="font-semibold text-gray-500">Type:</span>{" "}
                                {selectProperty?.propertyType}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-gray-500">Owner:</span>{" "}
                                {selectProperty?.user?.name}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-500">Company:</span>{" "}
                                {selectProperty?.user?.company || "Not Registered"}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-500">Status:</span>{" "}
                                <span className={`font-semibold ${selectProperty?.status === "active" ? "text-green-600" : "text-red-500"}`}>
                                    {selectProperty?.status}
                                </span>
                            </p>
                        </div>

                        {/* <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-gray-500">Interested For:</span>{" "}
                                <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium" onClick={requestHendler}>
                                    {selectProperty?.propertyType == 'sell' ? "Buy" : "Rent"}
                                </span>
                            </p>
                        </div> */}
                    </div>



                    <p className="text-gray-700 mb-3 sm-mb-6">{selectProperty?.long_description}</p>


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
                                                {selectProperty?.title}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Location</td>
                                            <td className="py-4 px-6 text-gray-800"> {selectProperty?.area}, {selectProperty?.city}, {selectProperty?.state}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Area Size</td>
                                            <td className="py-4 px-6 text-gray-800">2,500 sq ft</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Price</td>
                                            <td className="py-4 px-6 text-[#BFA249] font-bold text-lg">
                                                ₹{selectProperty?.price}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Category</td>
                                            <td className="py-4 px-6 text-gray-800">{selectProperty?.category}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Property Type</td>
                                            <td className="py-4 px-6 text-gray-800">{selectProperty?.propertyType}</td>
                                        </tr>
                                        <tr className="transition hover:bg-gray-100 ">
                                            <td className="py-4 px-6 text-gray-500 font-medium bg-gray-50">Year Built</td>
                                            <td className="py-4 px-6 text-gray-800">{selectProperty?.createdAt}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className=" h-fit">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl  font-bold text-gray-600 mb-6 border-b border-gray-200 pb-2">
                                    Request a Callback
                                </h2>
                            </div>
                            <div className="p-4 border rounded-md shadow-sm bg-white mt-4">
                                <h2 className="text-lg font-semibold mb-2 text-[#BFA249]">Send a Request</h2>
                                <form onSubmit={requestHendler} className="space-y-3">
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-gray-600">Request Type</label>
                                        <select
                                            value={requestType}
                                            onChange={(e) => setRequestType(e.target.value)}
                                            required
                                            className="w-full border px-3 py-2 rounded-md"
                                        >
                                            <option value="buy">Buy</option>
                                            <option value="rent">Rent</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-gray-600">Message (optional)</label>
                                        <textarea
                                            rows={3}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full border px-3 py-2 rounded-md"
                                            placeholder="Write a short note to the owner"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[#BFA249] cursor-pointer hover:bg-[#9E8437] text-white px-4 py-2 rounded-md"
                                    >
                                        Send Request
                                    </button>

                                    {/* {<p className="text-green-600 text-sm">success</p>} */}
                                    {/* {<p className="text-red-500 text-sm">error</p>} */}
                                </form>
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