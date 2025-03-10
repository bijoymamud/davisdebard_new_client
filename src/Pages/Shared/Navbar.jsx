
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Changed from Link to NavLink
import { Menu, X } from "lucide-react"; 
import bannerBg from "../../assets/banner_bg.png";
import logo from "../../assets/AiTitanLogoMain.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Common styles for nav links
  const navLinkStyles = ({ isActive }) => 
    `px-3 py-2 text-base font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-yellow-400 border-b-2 border-yellow-400' 
        : 'text-white hover:text-yellow-400'
    }`;

  const mobileNavLinkStyles = ({ isActive }) => 
    `block px-3 py-2 text-base font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-yellow-400 bg-gray-900' 
        : 'text-white hover:text-yellow-400'
    }`;

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md bg-black/60 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="relative mx-auto container">
        <div className="flex justify-between items-center py-2 px-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to ="/">
            <img src={logo} alt="Logo" className="w-[150px] h-[80px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/news_latter" className={navLinkStyles}>Newsletter</NavLink>
            <NavLink to="/books_collection" className={navLinkStyles}>Books</NavLink>
            <NavLink to="/software" className={navLinkStyles}>Software</NavLink>
            <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
          </div>

          <div></div>

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
              <NavLink to="/" className={mobileNavLinkStyles}>Home</NavLink>
              <NavLink to="/news_latter" className={mobileNavLinkStyles}>Newsletter</NavLink>
              <NavLink to="/books_collection" className={mobileNavLinkStyles}>Books</NavLink>
              <NavLink to="/software" className={mobileNavLinkStyles}>Software</NavLink>
              <NavLink to="/contact" className={mobileNavLinkStyles}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;