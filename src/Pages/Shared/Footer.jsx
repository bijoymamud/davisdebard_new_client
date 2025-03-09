// import React from "react";
// import footImg from "../../assets/footImg.png";  
// import Logo from "../../assets/AiTitanLogoMain.png";  


// const Footer = () => {
//   return (
//     <footer className="relative bg-black text-white py-20">
     
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-90"
//         style={{ backgroundImage: `url(${footImg})` }} 
//       ></div>


//       <div className="relative z-10 container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
     
//         <div>
//            <div className="">
//                        <img src={Logo} alt="Logo" className="w-[150px] h-[80px]" />
//                       <p className="text-sm mt-2">
//                         Choose the Best AI helps you discover top AI tools
//                      </p>
//                      </div>
     
//         </div>

//         <div>
//           <h3 className="text-white font-semibold mb-2">Legal</h3>
//           <ul className="text-sm space-y-1">
//             <li>
//               <a href="#" className="hover:text-yellow-500">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-500">
//                 Terms & Conditions
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-500">
//                 Newsletter
//               </a>
//             </li>
//           </ul>
//         </div>

     
//         <div>
//           <h3 className="text-white font-semibold mb-2">Contact</h3>
//           <ul className="text-sm space-y-1">
//             <li>
//               <a href="#" className="hover:text-yellow-500">
//                 Contact Us
//               </a>
//             </li>
            
//           </ul>
//         </div>
//       </div>


   
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import footImg from "../../assets/footImg.png";  
import Logo from "../../assets/AiTitanLogoMain.png";  

const Footer = () => {
  return (
    <footer className="relative bg-black text-white md:py-12 py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${footImg})` }} 
      ></div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
        <div className="flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <img src={Logo} alt="Logo" className="w-[120px] h-[60px] mx-auto md:mx-0" />
            <p className="text-xs mt-2">
              Choose the Best AI helps you discover top AI tools
            </p>
          </div>
        </div>

        {/* Mobile Legal & Contact Sections */}
        <div className="md:hidden flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="text-white font-semibold text-sm">Legal</h3>
              <ul className="text-xs space-y-1">
                <li><Link to="/privacy_policy" className="hover:text-yellow-500">Privacy Policy</Link></li>
                <li><Link to="/terms_condition" className="hover:text-yellow-500">Terms & Conditions</Link></li>
                <li><Link to="/news_latter" className="hover:text-yellow-500">Newsletter</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <h3 className="text-white font-semibold text-sm">Contact</h3>
              <ul className="text-xs space-y-1">
                <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Legal Section */}
        <div className="hidden md:block text-center md:text-left">
          <h3 className="text-white font-semibold mb-2">Legal</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/privacy_policy" className="hover:text-yellow-500">Privacy Policy</Link></li>
            <li><Link to="/terms_condition" className="hover:text-yellow-500">Terms & Conditions</Link></li>
            <li><Link to="/news_latter" className="hover:text-yellow-500">Newsletter</Link></li>
          </ul>
        </div>

        {/* Desktop Contact Section */}
        <div className="hidden md:block text-center md:text-left">
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
