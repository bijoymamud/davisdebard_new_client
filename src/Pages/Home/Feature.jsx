// import React from 'react';
// import bookImg from "../../assets/DavisBook.png";
// import { Link } from 'react-router-dom';

// const Feature = () => {
//   return (
//    <section className='bg-[#FDFBF5]'>
//  <div className="container mx-auto px-4 py-12 h-screen flex flex-col  justify-center items-center ">
  
//       <div className="flex flex-col md:flex-row items-center gap-8">
  
//         <div className="md:w-1/2 flex justify-center">
//           <img 
//             src={bookImg} 
//             alt="Book Cover" 
//             className="w-full max-w-xs md:max-w-md shadow-lg"
//           />
//         </div>
       
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-2xl md:text-4xl font-semibold text-black leading-tight">
//             Your Guide to Choosing the Best AI for Real-World Applications
//           </h1>
//           <p className="mt-4 text-[#373737] mb-5">
//           For Artificial Intelligence (AI), your choice is simple:  Get on board or be left behind.  Our goal is to arm you with the best possible information to compare AI tools by application and industry group.  You’ll learn the basic types of AI, its history, future trends, and industry leaders.  Enjoy case studies, exercises, and a remarkable side-by-side view of leading tools by category – 200 category winners in all, with price and quality ratings.  
// The book has a free companion website, ChooseTheBest.ai, to keep you current in whatever fields you select, where members learn monthly of breaking developments in their chosen niches.  
// Your future, and your future career, depend on making the best AI choices today.  Here is your key.  Unlock it.
//           </p>
//           <div className='space-y-5'>
//               <p className='text-[#373737]'>
//              <span className='text-[#0093A9] font-semibold '>Bonus:</span>  Free trial of our patent-pending “AiTAiN.Ai Achieve Dreams” software.  It amplifies your Google, Chat-GPT, Claude or Gemini searches by sending them to multiple search engines.  No retyping!   No remembering what you asked before!  It also saves your searches so you can pick up where you left off.
//             </p>

//             <p className='text-[#373737]'>
//               <span className='text-[#0093A9] font-semibold'>Extra Bonus: </span> If you buy the book on Amazon, and give a strong review, you may get six months free of “AiTAiN.Ai Achieve Dreams” software by asking for a code on this site.
//             </p>
//           </div>
//           <button className="mt-6 bg-gradient-to-r from-yellow-600  to-black/70 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
//           <Link
//           target='_blank'
//           to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
//           >
//             Buy on Amazon
//           </Link>
//           </button>
//         </div>

      

//       </div>
//     </div>
//    </section>
//   );
// };

// export default Feature;



// import React from 'react';
// import bookImg from "../../assets/DavisBook.png";
// import { Link } from 'react-router-dom';

// const Feature = () => {
//   return (
//     <section className="bg-[#FDFBF5]">
//       <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col  justify-center items-center">
//         <div className="flex flex-col items-center gap-8">
//           {/* Image Section */}
//           <div className="w-full flex justify-center">
//             <img
//               src={bookImg}
//               alt="Book Cover"
//               className="w-full max-w-xs shadow-lg"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="w-full text-center">
//             <h1 className="text-2xl font-semibold text-black leading-tight">
//               Your Guide to Choosing the Best AI for Real-World Applications
//             </h1>
//             <p className="mt-4 text-[#373737] text-sm">
//               For Artificial Intelligence (AI), your choice is simple: Get on board or be left behind. Our goal is to arm you with the best possible information to compare AI tools by application and industry group. You’ll learn the basic types of AI, its history, future trends, and industry leaders. Enjoy case studies, exercises, and a remarkable side-by-side view of leading tools by category – 200 category winners in all, with price and quality ratings.
//               The book has a free companion website, ChooseTheBest.ai, to keep you current in whatever fields you select, where members learn monthly of breaking developments in their chosen niches.
//               Your future, and your future career, depend on making the best AI choices today. Here is your key. Unlock it.
//             </p>
//             <div className="space-y-5 mt-5">
//               <p className="text-[#373737] text-sm">
//                 <span className="text-[#0093A9] font-semibold">Bonus:</span> Free trial of our patent-pending “AiTAiN.Ai Achieve Dreams” software. It amplifies your Google, Chat-GPT, Claude or Gemini searches by sending them to multiple search engines. No retyping! No remembering what you asked before! It also saves your searches so you can pick up where you left off.
//               </p>
//               <p className="text-[#373737] text-sm">
//                 <span className="text-[#0093A9] font-semibold">Extra Bonus:</span> If you buy the book on Amazon, and give a strong review, you may get six months free of “AiTAiN.Ai Achieve Dreams” software by asking for a code on this site.
//               </p>
//             </div>
//             <button className="mt-6 bg-gradient-to-r from-yellow-600 to-black/70 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md transition duration-300 md:w-full w-[200px]">
//               <Link
//                 target="_blank"
//                 to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
//               >
//                 Buy on Amazon
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;





import React from 'react';
import bookImg from "../../assets/DavisBook.png";
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <section className="bg-[#FDFBF5]">
      <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center items-center">
        {/* Mobile Layout (image above text) */}
        <div className="flex flex-col md:hidden items-center gap-8 w-full">
          <div className="w-full flex justify-center">
            <img
              src={bookImg}
              alt="Book Cover"
              className="w-full max-w-xs shadow-lg"
            />
          </div>
          <div className="w-full text-center">
            <h1 className="text-2xl font-semibold text-black leading-tight">
              Your Guide to Choosing the Best AI for Real-World Applications
            </h1>
            <p className="mt-4 text-[#373737] text-sm">
              For Artificial Intelligence (AI), your choice is simple: Get on board or be left behind. Our goal is to arm you with the best possible information to compare AI tools by application and industry group. You’ll learn the basic types of AI, its history, future trends, and industry leaders. Enjoy case studies, exercises, and a remarkable side-by-side view of leading tools by category – 200 category winners in all, with price and quality ratings.
              The book has a free companion website, ChooseTheBest.ai, to keep you current in whatever fields you select, where members learn monthly of breaking developments in their chosen niches.
              Your future, and your future career, depend on making the best AI choices today. Here is your key. Unlock it.
            </p>
            <div className="space-y-5 mt-5">
              <p className="text-[#373737] text-sm">
                <span className="text-[#0093A9] font-semibold">Bonus:</span> Free trial of our patent-pending “AiTAiN.Ai Achieve Dreams” software. It amplifies your Google, Chat-GPT, Claude or Gemini searches by sending them to multiple search engines. No retyping! No remembering what you asked before! It also saves your searches so you can pick up where you left off.
              </p>
              <p className="text-[#373737] text-sm">
                <span className="text-[#0093A9] font-semibold">Extra Bonus:</span> If you buy the book on Amazon, and give a strong review, you may get six months free of “AiTAiN.Ai Achieve Dreams” software by asking for a code on this site.
              </p>
            </div>
            <button className="mt-6 bg-gradient-to-r from-yellow-600 to-black/70 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md transition duration-300 w-full">
              <Link
                target="_blank"
                to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
              >
                Buy on Amazon
              </Link>
            </button>
          </div>
        </div>

        {/* Large Device Layout (image on left, text on right) */}
        <div className="hidden md:flex md:flex-row items-center gap-8 w-full">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={bookImg}
              alt="Book Cover"
              className="w-full max-w-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-semibold text-black leading-tight">
              Your Guide to Choosing the Best AI for Real-World Applications
            </h1>
            <p className="mt-4 text-[#373737] text-lg">
              For Artificial Intelligence (AI), your choice is simple: Get on board or be left behind. Our goal is to arm you with the best possible information to compare AI tools by application and industry group. You’ll learn the basic types of AI, its history, future trends, and industry leaders. Enjoy case studies, exercises, and a remarkable side-by-side view of leading tools by category – 200 category winners in all, with price and quality ratings.
              The book has a free companion website, ChooseTheBest.ai, to keep you current in whatever fields you select, where members learn monthly of breaking developments in their chosen niches.
              Your future, and your future career, depend on making the best AI choices today. Here is your key. Unlock it.
            </p>
            <div className="space-y-5 mt-5">
              <p className="text-[#373737] text-lg">
                <span className="text-[#0093A9] font-semibold">Bonus:</span> Free trial of our patent-pending “AiTAiN.Ai Achieve Dreams” software. It amplifies your Google, Chat-GPT, Claude or Gemini searches by sending them to multiple search engines. No retyping! No remembering what you asked before! It also saves your searches so you can pick up where you left off.
              </p>
              <p className="text-[#373737] text-lg">
                <span className="text-[#0093A9] font-semibold">Extra Bonus:</span> If you buy the book on Amazon, and give a strong review, you may get six months free of “AiTAiN.Ai Achieve Dreams” software by asking for a code on this site.
              </p>
            </div>
            <button className="mt-6 bg-gradient-to-r from-yellow-600 to-black/70 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
              <Link
                target="_blank"
                to="https://www.amazon.com/stores/Andrew-Boyd/author/B001IXSAD2?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"
              >
                Buy on Amazon
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;