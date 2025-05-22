import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';

import SearchPage from '@/components/SearchCard';
export default function JaipurProperties() {
  return (
    
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar></Navbar>

    <SearchPage></SearchPage>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}