'use client'
import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import SearchPage from '@/components/SearchCard';
import { useSearchParams } from 'next/navigation';

export default function JaipurProperties() {
  const searchParams = useSearchParams();
  const property_Type = searchParams.get('property_Type')
  const property_Category = searchParams.get('property_Category')
  const property_Date = searchParams.get('property_Date')

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar></Navbar>
        <SearchPage query={{ property_Type, property_Category, property_Date }}></SearchPage>
        <Statistics></Statistics>
        <Footer></Footer>
      </div>
    </>
  );
}