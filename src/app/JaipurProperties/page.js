import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from '@/components/PropertyCard';
import Statistics from '@/components/Statistics';
import Propertyhero from '@/components/Propertyhero';
export default function JaipurProperties() {
  return (
    
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <Propertyhero></Propertyhero>
     <div className='text-center'>
    <h1 className='text-3xl font-bold mt-5 mb-5 underline underline-offset-8 decoration-[#BFA249] decoration-4'>Featured Projects</h1>
    </div>
    <PropertyCard></PropertyCard>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}