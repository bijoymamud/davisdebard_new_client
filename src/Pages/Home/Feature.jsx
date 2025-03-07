import React from 'react';
import bookImg from "../../assets/bookImg.png";
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Responsive Flexbox */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
  {/* Image Section (Below on Mobile, Left on Desktop) */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={bookImg} 
            alt="Book Cover" 
            className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section (Top on Mobile, Right on Desktop) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Your Guide to Choosing the Best AI for Real-World Applications
          </h1>
          <p className="mt-4 text-gray-600">
            "Choose the Best AI" guides you through AI innovations with expert insights,
            helping you find the best AI tools across industries like finance and education.
          </p>
          <button className="mt-6 bg-[#E7B008] hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
          <Link
          target='_blank'
          to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
          >
            Buy on Amazon
          </Link>
          </button>
        </div>

      

      </div>
    </section>
  );
};

export default Feature;

