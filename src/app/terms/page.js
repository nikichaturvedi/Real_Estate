import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import TermsHero from '@/components/TermsHero';
import TermsAndConditions from '@/components/TermsData';


export default function About() {
  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar></Navbar>
    <TermsHero></TermsHero>
    <TermsAndConditions></TermsAndConditions>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}