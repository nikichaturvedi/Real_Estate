import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from '@/components/PropertyCard';
import Statistics from '@/components/Statistics';
import Propertyhero from '@/components/Propertyhero';
export default function JaipurProperties() {
  return (
    
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar></Navbar>
    <Propertyhero></Propertyhero>
    <PropertyCard></PropertyCard>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}