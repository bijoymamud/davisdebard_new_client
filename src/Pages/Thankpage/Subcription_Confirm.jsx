import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
const Subcription_Confirm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-xl">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-black mb-2">Subscription Confirmed</h2>
       

        <div className=" p-3 rounded-md  mb-4 text-base">
          <p>Thank you for subscribing to the <span className="text-gray-900 font-semibold text-base">FREE</span> Choose the Best AI monthly newsletter. <br /> <br />

You will receive updates on your chosen categories. <br /><br />

You may cancel at any time. <br /><br />

To change your categories, simply fill in the form again, using the same email.</p>
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

export default Subcription_Confirm;
