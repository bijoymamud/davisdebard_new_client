import React from "react";
import footImg from "../../assets/footImg.png";  
import Logo from "../../assets/Logo.png";  


const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-20">
     
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${footImg})` }} 
      ></div>


      <div className="relative z-10 container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
     
        <div>
           <div className="flex items-start">
                       <img src={Logo} alt="Logo" className="w-[80px]" />
                       <div className="ml-2">
                         <div className="text-xl font-bold text-white">AI</div>
                         <div className="text-xl font-bold text-yellow-500">BOOKPOINT</div>
                              <p className="text-sm mt-2">
            Your guide to the top AI tools and innovations across industries.
          </p>
                       </div>
                     </div>
     
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Legal</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>


   
    </footer>
  );
};

export default Footer;
