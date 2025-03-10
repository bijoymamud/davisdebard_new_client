"use client"

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DiscountForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reviewDate: "",
    rating: 5,
    review: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prevState) => ({
      ...prevState,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
     navigate("/thank-you");
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FDFBF5] p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg border border-yellow-400/30 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Your Discount Code</h1>
        <p className="text-gray-600 mb-6">
          Select Your Interests And Get Monthly Updates On The Best AI Tools In Your Preferred Categories.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    className="sr-only"
                    checked={formData.rating === star}
                    onChange={() => handleRatingChange(star)}
                  />
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                      formData.rating === star ? "bg-yellow-500 border-yellow-500" : "border-gray-300 bg-white"
                    }`}
                  >
                    {formData.rating === star && <div className="w-3 h-3 rounded-full bg-white"></div>}
                  </div>
                  <span className="ml-2 text-gray-700">{star} star</span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">Only a <span className="flex text-base font-semibold items-start gap-[1px] text-yellow-600">( 5 <FaStar/> )</span> review earns the discount code.</p>
          </div>

          <div className="mb-6">
            <label htmlFor="review" className="block text-gray-700 mb-1">
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-white transition duration-300"
            style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}





// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate(); // Hook for navigation

//   const onSubmit = (data) => {
//     console.log("Form Data:", data); // Log data to console
//     navigate("/thank-you"); // Redirect to Thank You page
//   };

//   return (
//     <section className="bg-[#FDFBF5] flex justify-center py-10 px-4">
//       <div className="w-full max-w-2xl bg-white shadow-md p-6 rounded-md border border-yellow-300">
//         <h2 className="text-2xl font-semibold text-black mb-2">Contact Us</h2>
//         <p className="text-gray-600 mb-6">
//           We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Name</label>
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter your name"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
//               })}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           {/* Message Field */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Message</label>
//             <textarea
//               {...register("message", { required: "Message is required" })}
//               className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Write your message..."
//             ></textarea>
//             {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-md font-semibold text-white transition duration-300"
//             style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
