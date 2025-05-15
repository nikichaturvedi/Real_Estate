'use client';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

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
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6  shadow-lg rounded-lg overflow-hidden">
                    {/* Right - Form */}
                    <div className="md:w-1/2 p-6 border-1 border-[#acaaa4]  rounded-sm">
                        <h2 className="text-3xl text-center font-bold mb-6 text-gray-700">Contact Us</h2>

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
                                        placeholder='Name'
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
                                        placeholder='Contact Number'
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
                                        placeholder='Email'
                                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                                    />
                                </div>
                                <div className="md:w-1/2">

                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder='Subject'
                                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                                    />
                                </div>
                            </div>


                            <div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    placeholder='Message'
                                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#a38a3e] text-white px-3 py-2 rounded-md hover:bg-[#8e7833] transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Left - Image */}

                    <div className="md:w-1/2 h-64 md:h-auto border-1 border-[#acaaa4] rounded-sm">
                        <h2 className="text-xl text-center font-bold mb-2 mt-1 text-gray-500 flex items-center justify-center gap-2">
                            <MapPinIcon className="w-5 h-5 text-[#a38a3e]" />
                            Location
                        </h2>
                        <img
                            src="/map.jpg"
                            alt="Contact Us"
                            className="w-full h-full object-cover"

                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
