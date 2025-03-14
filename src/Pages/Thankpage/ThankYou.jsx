import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
const ThankYou = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-xl">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Thank You</h2>
         
  
          <div className=" p-3 rounded-md  mb-4 text-base">

<p>Your request for 6 Months FREE of "AiTAiN.Ai Achieve Dreams" software has been received.</p> <br />
<p>Our team will review your request and get back to you within the <span className="font-semibold text-green-600 text-base">next 48 hours</span>.</p>

          </div>
  
          <Link
            to="/"
           className="w-full py-3 px-10 rounded-md font-semibold text-white transition duration-300"
            style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
          >
            Return To Home
          </Link>
        </div>
    </div>
  );
};

export default ThankYou;
