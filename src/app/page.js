import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maincards from "@/components/Maincards";
import PropertyCard from '@/components/PropertyCard';
import Statistics from '@/components/Statistics';
import HomeServices from '@/components/Home-servies';
export default function Home() {
  return (
    
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <Hero></Hero>
    <Maincards></Maincards>
   <div className='text-center'>
   <h1 className='text-3xl font-bold mt-5 mb-5 underline underline-offset-8 decoration-[#BFA249] decoration-4'>Featured Projects</h1>
   </div>
    <PropertyCard></PropertyCard>
    <HomeServices></HomeServices>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}