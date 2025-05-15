import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import Sellhero from '@/components/Sellhero';
import ContactDetail from '@/components/ContactDetail';
import RentSellFrom from '@/components/Rent-Sell-From';

export default function Contact() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <Sellhero></Sellhero>
    <RentSellFrom></RentSellFrom>
    <ContactDetail></ContactDetail>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}