

// import React from 'react';
// import bookCover from '../../assets/Logobanner.png'; 
// import { Link } from 'react-router-dom';

// const BookPromo = () => {
//   return (
//  <section className='bg-[#FDFBF5] md:pb-32'>
//    <div
//       className="container mx-auto md:min-h-[50vh] mt-[500px] w-full rounded-lg flex items-center justify-start  bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${bookCover})` }}
//     >
//       <div className=" bg-opacity-80 md:p-8 p-4 text-start md:ms-32 md:w-1/2 md:py-20" >
//     <div className=''>
//             <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-start">
// Special Offer        </h1>
//         <p className="text-lg text-gray-600 text-center md:text-start">
//          Buy the book on Amazon, give it a strong review, and you may earn 6 months free of the amazingly useful "AiTAiN.Ai Achieve Dreams" software.  Click "Get Discount" for details.  (Buy Book goes straight to Amazon where they can buy the book.)
//         </p>

//         <div className='space-x-3 text-center md:text-start mt-10'>
//               <button>
//                 <Link
//               to="/discount_info"
//               className="mt-6 bg-gradient-to-r from-yellow-600  to-black/70 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
//                 Get Discount
//           </Link>
//               </button>
//              <button>
//                 <Link
//                 target='_blank'
//               to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
//               className="mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
//          Book Now
//           </Link>
//               </button>
//         </div>
//     </div>
//       </div>
//     </div>
//  </section>
//   );
// };

// export default BookPromo;






import React from "react";
import bookCover from "../../assets/Logobanner.png";
import { Link } from "react-router-dom";

const BookPromo = () => {
  return (
    <section className="bg-[#FDFBF5] md:pb-32">
      {/* Large Screen View (Hidden on Mobile) */}
      <div
        className="hidden md:flex container mx-auto min-h-[50vh] w-full rounded-lg items-center justify-start bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${bookCover})` }}
        // style={{ backgroundImage: `url('https://i.ibb.co/DP2CcNCZ/Group-1597883007.png')` }}
        style={{ backgroundImage: `url('https://i.ibb.co.com/4w4vYBXt/Group-1597883009.png')` }}
      >
        <div className="bg-opacity-80 md:p-8 p-4 text-start md:ms-32 md:w-1/2 md:py-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-start">
            Special Offer
          </h1>
          <p className="text-lg text-gray-600 text-center md:text-start md:me-20">
            Buy the book on Amazon, give it a strong review, and you may earn 6
            months free of the amazingly useful "AiTAiN.Ai Achieve Dreams"
            software. Click "Get Discount" for details.
          </p>

          <div className="space-x-3 text-center md:text-start mt-10">
            <Link
              to="/review"
              className="bg-gradient-to-r from-yellow-600 to-black/70 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Get Discount
            </Link>

            <Link
              target="_blank"
              to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile View (Hidden on Large Screens) */}
      <div className="md:hidden bg-[#FDFBF5] px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Special Offer</h1>
        <p className="text-lg text-gray-700">
          Buy the book on Amazon, give it a strong review, and you may earn 6
          months free of the "AiTAiN.Ai Achieve Dreams" software. Click "Get
          Discount" for details.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <Link
            to="/discount_info"
            className="w-full text-center bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Get Discount
          </Link>

          <Link
            target="_blank"
            to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
            className="w-full text-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookPromo;
