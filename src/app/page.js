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
    <PropertyCard></PropertyCard>
    <HomeServices></HomeServices>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}