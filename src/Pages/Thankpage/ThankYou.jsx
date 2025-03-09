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
<p>Our team will review your request and get back to you within the next 48 hours.</p>

          </div>
  
          <Link
            to="/"
            className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:bg-yellow-600"
          >
            Return To Home
          </Link>
        </div>
    </div>
  );
};

export default ThankYou;
