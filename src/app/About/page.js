import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import AboutHero from '@/components/AboutHero';
import AboutContent from '@/components/AboutContent';


export default function About() {
  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar></Navbar>
    <AboutHero></AboutHero>
    <AboutContent></AboutContent>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}