

import React from 'react';
import bookCover from '../../assets/bookBG.png'; // Path to your image
import { Link } from 'react-router-dom';

const BackgroundSection = () => {
  return (
 <section className='bg-[#FDFBF5]'>
   <div
      className="container mx-auto min-h-[70vh] w-full rounded-lg flex items-center justify-start  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bookCover})` }}
    >
      <div className=" bg-opacity-80 md:p-8 p-4 text-start container md:ms-44 md:w-1/2 md:py-20" >
    <div className=''>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-start">
Special Offer        </h1>
        <p className="text-lg text-gray-600 text-center md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className='space-x-3 text-center md:text-start mt-10'>
              <button>
                <Link
              to="/discount_info"
              className="mt-6 bg-[#E7B008] hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
         Get Discount
          </Link>
              </button>
             <button>
                <Link
                target='_blank'
              to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
              className="mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
         Book Now
          </Link>
              </button>
        </div>
    </div>
      </div>
    </div>
 </section>
  );
};

export default BackgroundSection;