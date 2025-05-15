export default function Statistics() {
    return (
      <div className="relative bg-cover bg-center py-16 px-4" style={{ backgroundImage: "url('/statistic.jpg')" }}>
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg max-w-6xl mx-auto">
        <div className='text-center text-white mb-4'>
         <h1 className='text-3xl font-bold mt-5 mb-8 underline underline-offset-8 decoration-[#BFA249] decoration-4'>Featured Projects</h1>
        </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div className="bg-white/30 hover:bg-[#BFA249] transition transform hover:scale-105 duration-300 p-6 rounded-sm shadow-lg">
           <h2 className="text-4xl font-bold">150+</h2>
           <p className="text-lg mt-2">Projects</p>
         </div>

         <div className="bg-white/10 hover:bg-[#BFA249] transition transform hover:scale-105 duration-300 p-6 rounded-sm shadow-lg">
           <h2 className="text-4xl font-bold">100%</h2>
           <p className="text-lg mt-2">Client Satisfaction</p>
        </div>

        <div className="bg-white/10 hover:bg-[#BFA249] transition transform hover:scale-105 duration-300 p-6 rounded-sm shadow-lg">
          <h2 className="text-4xl font-bold">24/7</h2>
          <p className="text-lg mt-2">Support</p>
       </div>
       <div className="bg-white/10 hover:bg-[#BFA249] transition transform hover:scale-105 duration-300 p-6 rounded-sm shadow-lg">
          <h2 className="text-4xl font-bold">20 Years</h2>
          <p className="text-lg mt-2">Experience</p>
       </div>
          </div>
        </div>
      </div>
    );
  }
  