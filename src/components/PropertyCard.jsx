'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import axiosInstance from './config/axiosInstace';

export default function PropertyPage() {

  const [propertyData, setPropertyData] = useState([]);
  const [limit, setLimit] = useState(6);

  const view_Property = async () => {
    try {
      const response = await axiosInstance.get(`/property/read?limit=${limit}`)
      setPropertyData(response.data.allProperty);
    } catch (error) {
      console.log(error);
    }
  }

  const soon_Property = propertyData?.filter(data => data.status == 'soon')
  const avaible_Property = propertyData?.filter(data => data.status == 'available')

  useEffect(
    () => {
      view_Property()
    }, []
  )

  return (
    <>
      {/* avible project */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold sm:pt-5 pt-3 pb-5 underline underline-offset-8 decoration-[#BFA249] decoration-4'>Featured Projects</h1>
      </div>
      <div className='grid gap-10 grid-cols-3 p-10'>
        {
          avaible_Property?.map((data, index) => {
            return (
              <div key={index} className="bg-white shadow-md  rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-36 sm:h-48 w-full">
                  <Image
                    src={data.mainImage}
                    alt={'title'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{data.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{data.area}, {data.city}, {data.state}</p>
                  <p className="text-lg font-bold text-[#BFA249] mb-2">${data.price}</p>
                  <p className="text-sm text-gray-700 mb-2">{data.short_description}</p>
                  <div >
                    <Link
                      href={`propertyDetails/${data._id}`}
                      className="inline-block text-[#346297] hover:text-indigo-800 text-sm underline underline-offset-2 decoration-[#346297] decoration-1"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* coming project */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold sm:pt-5 pt-3 pb-5 underline underline-offset-8 decoration-[#BFA249] decoration-4'>Soon Projects</h1>
      </div>
      <div className='grid gap-10 grid-cols-3 p-10'>
        {
          soon_Property?.map((data, index) => {
            return (
              <div key={index} className="bg-white shadow-md  rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-36 sm:h-48 w-full">
                  <Image
                    src={data.mainImage || 'mainImage'}
                    alt={'mainImage'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{data.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{data.area}, {data.city}, {data.state}</p>
                  <p className="text-lg font-bold text-[#BFA249] mb-2">${data.price}</p>
                  <p className="text-sm text-gray-700 mb-2">{data.short_description}</p>
                  <div >
                    <Link
                      href={`propertyDetails/${data._id}`}
                      className="inline-block text-[#346297] hover:text-indigo-800 text-sm underline underline-offset-2 decoration-[#346297] decoration-1"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

// export default function PropertyPage() {
//   const useScrollAnimation = (ref) => {
//     useEffect(() => {
//       const element = ref.current;
//       if (!element) return;

//       const baseClass = '-translate-x-10';
//       element.classList.add('opacity-0', baseClass, 'transition-all', 'duration-700');

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             element.classList.remove('opacity-0', baseClass);
//             element.classList.add('opacity-100', 'translate-x-0');
//             observer.unobserve(element);
//           }
//         },
//         { threshold: 0.1 }
//       );

//       observer.observe(element);

//       return () => observer.disconnect();
//     }, [ref]);
//   };

//   return (
//     <section className=" px-2 md:px-6 py-10 bg-zinc-50 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {properties.map((property, index) => {
//         const cardRef = useRef(null);
//         useScrollAnimation(cardRef);

//         return (
//           <div key={property.id} ref={cardRef} className="transform">
//             <PropertyCard {...property} />
//           </div>
//         );
//       })}
//     </section>
//   );
// }
