'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

function useScrollAnimation(ref, direction = 'left') {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const baseClass = direction === 'left' ? '-translate-x-10' : 'translate-x-10';
    element.classList.add('opacity-0', baseClass, 'transition-all', 'duration-800');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0', baseClass);
          element.classList.add('opacity-100', 'translate-x-0');
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, direction]);
}

export default function Maincards() {
  const section1Text = useRef(null);
  const section1Image = useRef(null);

  const section2Text = useRef(null);
  const section2Image = useRef(null);

  const section3Text = useRef(null);
  const section3Image = useRef(null);

  useScrollAnimation(section1Text, 'left');
  useScrollAnimation(section1Image, 'right');

  useScrollAnimation(section2Text, 'right');
  useScrollAnimation(section2Image, 'left');

  useScrollAnimation(section3Text, 'left');
  useScrollAnimation(section3Image, 'right');

  return (
    <section className="font-sans space-y-8">

      {/* Section 1 */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-4 bg-white'>
        <div ref={section1Text} className="md:w-1/2 w-full transform">
          <h2 className="text-2xl font-bold mb-1">FIRST</h2>
          <h1 className="text-3xl font-bold mb-4">
            Hassle-Free Real Estate{' '}
            <span className="underline underline-offset-8 decoration-[#BFA249] decoration-4">Solutions</span>
          </h1>
          <p className="text-gray-600 mb-4">
            Discover a wide array of options for selling your home quickly and hassle-free. Sell your home with no repairs, no agent commissions, in as-is condition on your timeline. If you’re selling a house in poor condition, there’s no better way. Ditch inconvenience and use TBH cash home buyers in Arkansas.
          </p>
        </div>
        <div ref={section1Image} className="md:w-1/2 w-full transform">
          <Image
            src="/mainimg3.jpg"
            alt="Selling home quickly"
            width={600}
            height={300}
            style={{ height: '350px' }}
            className="border-8 border-stone-800"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-4 bg-zinc-100'>
        <div ref={section2Image} className="md:w-1/2 w-full transform">
          <Image
            src="/mainimg1.jpg"
            alt="Sell property fast"
            width={600}
            height={300}
            style={{ height: '350px' }}
            className="border-8 border-stone-800"
          />
        </div>
        <div ref={section2Text} className="md:w-1/2 w-full transform">
          <h2 className="text-2xl font-bold mb-1">NOT TO MENTION</h2>
          <h1 className="text-3xl font-bold mb-4">
            <span className="underline underline-offset-8 decoration-[#BFA249] decoration-4">Sell Your</span> Property Fast
          </h1>
          <p className="text-gray-600 mb-4">
            Looking to sell your property fast? Selling your house without a realtor is quick and easy. Tristan Buys Houses can provide you with a cash offer.
          </p>
          <p className="text-gray-600 mb-2">
            Our team of local Real Estate Investors in Jonesboro Arkansas is here to help you sell your home effortlessly. Contact us today!
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-4 bg-white'>
        <div ref={section3Text} className="md:w-1/2 w-full transform">
          <h2 className="text-2xl font-bold mb-1">AND LET’S NOT FORGET</h2>
          <h1 className="text-3xl font-bold mb-4">
            <span className="underline underline-offset-8 decoration-[#BFA249] decoration-4">Find Your</span> Perfect Home
          </h1>
          <p className="text-gray-600 mb-4">
            Searching for your dream home? Tristan Buys Houses offers a wide array of options for homebuyers in Arkansas. With easy financing options, and a great network of real estate agents, we can help you find the perfect home that suits your needs. Start your home search with us today!
          </p>
        </div>
        <div ref={section3Image} className="md:w-1/2 w-full transform">
          <Image
            src="/mainimg4.jpg"
            alt="Find perfect home"
            width={600}
            height={300}
            style={{ height: '350px' }}
            className="border-8 border-stone-800"
          />
        </div>
      </div>

    </section>
  );
}
