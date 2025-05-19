import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import PrivacyHero from '@/components/PrivacyHero';
import PrivacyPolicy from '@/components/Privacy-PolicyData';
export default function About() {
  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar></Navbar>
    <PrivacyHero></PrivacyHero>
    <PrivacyPolicy></PrivacyPolicy>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}