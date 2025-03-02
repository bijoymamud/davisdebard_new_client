// import React, { useState } from 'react';
// import { Menu, X, BookOpen } from 'lucide-react';
// import bannerBg from "../../assets/banner_bg.png"
// import logo from "../../assets/Logo.png"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="relative">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 w-full h-full bg-black z-0" 
//         style={{
//           backgroundImage: `url(${bannerBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 1
//         }}
//       ></div>
      
//       {/* Navbar Content */}
//       <div className="relative z-10 mx-auto container">
//         <div className="flex justify-between items-center py-2">
//           {/* Logo and Brand */}
//           <div className="flex items-center">
//             <img src={logo} alt="" className='w-[80px]'/>
//             <div className="ml-2">
//               <div className="text-xl font-bold text-white">AI</div>
//               <div className="text-xl font-bold text-yellow-500">BOOKPOINT</div>
//             </div>
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8 md:text-lg">
//             <a href="#" className="text-yellow-500 hover:text-yellow-400 px-3 py-2 text-sm font-medium">Home</a>
//             <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Book</a>
//             <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Newsletter</a>
//             <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Software</a>
//             <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Contact</a>
//           </div>

//           <div>

//           </div>
          
//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button 
//               type="button" 
//               className="text-white hover:text-yellow-400"
//               onClick={toggleMenu}
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-80 rounded-md">
//               <a href="#" className="text-yellow-500 hover:text-yellow-400 block px-3 py-2 text-base font-medium">Home</a>
//               <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Book</a>
//               <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Newsletter</a>
//               <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Software</a>
//               <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Contact</a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import bannerBg from "../../assets/banner_bg.png";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md bg-black/60 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="relative mx-auto container">
        <div className="flex justify-between items-center py-2 px-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-[80px]" />
            <div className="ml-2">
              <div className="text-xl font-bold text-white">AI</div>
              <div className="text-xl font-bold text-yellow-500">BOOKPOINT</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 md:text-lg">
            <a href="#" className="text-yellow-500 hover:text-yellow-400 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Book</a>
            <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Newsletter</a>
            <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Software</a>
            <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-white hover:text-yellow-400"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-80 rounded-md">
              <a href="#" className="text-yellow-500 hover:text-yellow-400 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Book</a>
              <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Newsletter</a>
              <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Software</a>
              <a href="#" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

