import React from "react";
import backgroundGif from "../../assets/bannerVideo.gif";

const Banner = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      ></div>

      {/* Content */}
      <div className=" text-white relative z-10 md:mb-28">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 max-w-4xl mx-auto">
          Choose The Best AI For Your Needs
        </h1>
        <p className="mt-4 text-sm md:text-lg max-w-3xl mx-auto">
          Choose the best AI helps you discover top AI tools for various industries, with expert rankings and real-world applications to guide your decisions.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#CE9500] hover:bg-yellow-600 font-semibold py-3 px-6 rounded-md text-white">
            Get The Book
          </button>
          <button className=" font-semibold py-3 px-6 rounded-lg border border-[#CE9500] text-[#E7B008]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Banner;
