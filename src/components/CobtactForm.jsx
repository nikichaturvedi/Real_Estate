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
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-2">
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 shadow-xl bg-white rounded-2xl overflow-hidden p-2 sm:p-6">
                    
                    {/* Contact Form */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl text-center font-bold mb-6 text-gray-700">Contact Us</h2>

                        {submitted && (
                            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded shadow">
                                Your message has been sent successfully!
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="md:flex md:space-x-4 space-y-5 md:space-y-0">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full border border-gray-300 px-5 py-3 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none transition-all"
                                />
                                <input
                                    type="tel"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    placeholder="Contact Number"
                                    className="w-full border border-gray-300 px-5 py-3 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none transition-all"
                                />
                            </div>

                            <div className="md:flex md:space-x-4 space-y-5 md:space-y-0">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email"
                                    className="w-full border border-gray-300 px-5 py-3 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none transition-all"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Subject"
                                    className="w-full border border-gray-300 px-5 py-3 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none transition-all"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                                placeholder="Message"
                                className="w-full border border-gray-300 px-5 py-3 rounded-md focus:ring-2 focus:ring-[#a38a3e] outline-none transition-all"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-[#a38a3e] text-white px-2 py-2 sm:px-4 sm:py-3 font-semibold rounded-md hover:bg-[#8e7833] shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="md:w-1/2 h-96 md:h-auto pb-10">
                        <h2 className=" pb-5   flex items-center justify-center gap-2 text-3xl text-center font-bold  text-gray-700">
                            <MapPinIcon className="w-6 h-6 text-[#a38a3e]" />
                            Our Location
                        </h2>
                        <iframe
                            title="Jagatpura, Jaipur Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl shadow-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1684573460835!2d75.8663343144331!3d26.81089578317005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6d26c6c1ed5%3A0x9df5f88ae7cb27c4!2sJagatpura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1682627478842!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
