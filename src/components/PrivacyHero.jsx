'use client'; 

import Link from 'next/link';

export default function PrivacyHero() {
    return (
      <section
        className="mt-20 bg-cover bg-center h-[50vh] md-h-[50vh] sm-h-[80vh] flex flex-col items-center justify-center relative" 
        style={{ backgroundImage: "url('/street-ordinary-catalan-town.jpg')" }}
      >
        
        <div className="text-white text-center mt-20 flex flex-col md:flex-row z-10 mb-6">
          <div className="bg-[#a38a3e] p-3 opacity-85">
            <h2 className="text-4xl font-bold">Privacy Policy</h2>
          </div>
          <div className="bg-[#5f7ba3]  p-3 opacity-85">
            <h2 className="text-md mt-2 font-bold">
                <Link className='hover:text-[#7e6a30]' href="/">Home</Link>
                <span className='text-[#7a6b3e]'> / </span> 
                <span className='hover:text-[#7e6a30]'>Privacy Policy </span>
           </h2>
          </div>
        </div>
      </section>
    );
  }
  