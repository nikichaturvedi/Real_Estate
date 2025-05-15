import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import Serviceshero from '@/components/Serviceshero';
import RealEstateServices from '@/components/RealEstateServices';

export default function Services() {
  return (
    
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <Serviceshero></Serviceshero>
    <RealEstateServices></RealEstateServices>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}