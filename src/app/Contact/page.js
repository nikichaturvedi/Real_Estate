import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import Contacthero from '@/components/ContactHero';
import ContactForm from '@/components/CobtactForm';
import ContactDetail from '@/components/ContactDetail';


export default function Contact() {
  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar></Navbar>
    <Contacthero></Contacthero>
    <ContactForm></ContactForm>
    <ContactDetail></ContactDetail>
    <Statistics></Statistics>
    <Footer></Footer>
    </div>
    </>
  );
}