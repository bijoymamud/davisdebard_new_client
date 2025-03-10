import React from "react";
import backgroundGif from "../../assets/bannerVideo.gif";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center text-center px-4">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white space-y-6 mb-5">
        <h1 className="text-2xl sm:text-5xl font-bold text-yellow-400 max-w-2xl mx-auto">
          Choose the Best AI
        </h1>
        <p className="text-sm sm:text-base max-w-xl mx-auto">
          Choose the Best AI helps you discover top AI tools.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link
            target="_blank"
            to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
            className="w-40 h-12 flex items-center justify-center bg-[#CE9500] hover:bg-yellow-600 font-semibold rounded-md text-white"
          >
            Get the Book
          </Link>
          <Link
          to="/news_latter"
          className="w-40 h-12 flex items-center justify-center font-semibold rounded-md border border-[#CE9500] text-[#E7B008] hover:bg-[#CE9500]/10">
            Subscribe Now
          </Link>
          <Link
            to="/software"
            className="w-40 h-12 flex items-center justify-center font-semibold rounded-md border border-[#CE9500] text-[#E7B008] hover:bg-[#CE9500]/10"
          >
            Software
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;





