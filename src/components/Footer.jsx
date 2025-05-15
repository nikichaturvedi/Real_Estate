import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 pl-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-4 ">RealEstateCo</h2>
          <p>Your trusted partner in finding the perfect home.</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/JaipurProperties" className="hover:underline">Properties</a></li>
            <li><a href="/About" className="hover:underline">About Us</a></li>
            <li><a href="/Contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>123 Main Street<br />Jaipur Rajsthan, JR 10001</p>
          <p className="mt-2">Email: info@realestateco.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://in.linkedin.com/" className="hover:text-blue-700"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

     
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RealEstateCo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;