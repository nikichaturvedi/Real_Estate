import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import Bloghero from '@/components/Bloghero';
import BlogCards from '@/components/BlogCards';


export default function Blogs() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <Bloghero></Bloghero>
    <BlogCards></BlogCards>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}