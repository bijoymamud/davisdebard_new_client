// import React from "react";
// import backgroundGif from "../../assets/bannerVideo.gif";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center text-center">
//       {/* Background GIF */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundGif})` }}
//       ></div>

//       {/* Content */}
//       <div className=" text-white relative z-10 md:mb-28">
//         <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 max-w-4xl mx-auto">
//           Choose the Best AI
//         </h1>
//         <p className="mt-4 text-sm md:text-lg max-w-3xl mx-auto">
//            Choose the Best AI helps you discover top AI tools.
//         </p>
//         <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
//           <button className="bg-[#CE9500] hover:bg-yellow-600 font-semibold py-3 px-6 rounded-md text-white">
//          <Link 
//          target='_blank'
//          to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
//          >
//            Get the Book
//          </Link>
//           </button>
//           <button className=" font-semibold py-3 px-6 rounded-lg border border-[#CE9500] text-[#E7B008] ">
//             Subscribe Now
//           </button>

//             <button className="">
//               <Link className=" font-semibold py-3 px-6 rounded-lg border border-[#CE9500] text-[#E7B008]">
//               Software
//           </Link>
//             </button>
//         </div>
//       </div>

//       {/* Overlay for better readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//     </div>
//   );
// };

// export default Banner;






import React from "react";
import backgroundGif from "../../assets/bannerVideo.gif";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full  h-[90vh] flex items-center justify-center text-center px-4">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 max-w-2xl mx-auto">
          Choose the Best AI
        </h1>
        <p className="text-sm sm:text-base max-w-xl mx-auto">
          Choose the Best AI helps you discover top AI tools.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="w-full sm:w-auto bg-[#CE9500] hover:bg-yellow-600 font-semibold py-2 px-6 rounded-md text-white">
            <Link
              target="_blank"
              to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
            >
              Get the Book
            </Link>
          </button>
          <button className="w-full sm:w-auto font-semibold py-2 px-6 rounded-md border border-[#CE9500] text-[#E7B008] hover:bg-[#CE9500]/10">
            Subscribe Now
          </button>
          <button className="w-full sm:w-auto">
            <Link className="block font-semibold py-2 px-6 rounded-md border border-[#CE9500] text-[#E7B008] hover:bg-[#CE9500]/10">
              Software
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;