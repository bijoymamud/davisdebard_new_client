// "use client"

// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function DiscountForm() {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     rating: 5,
//     review: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleRatingChange = (rating) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       rating,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//      navigate("/thank-you");
   
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#FDFBF5] p-4">
//       <div className="w-full max-w-3xl bg-white rounded-lg border border-yellow-400/30 p-6 md:p-8">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Your Discount Code</h1>
//         <p className="text-gray-600 mb-6">
//           Select Your Interests And Get Monthly Updates On The Best AI Tools In Your Preferred Categories.
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="first_name" className="block text-gray-700 mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="first_name"
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="last_name" className="block text-gray-700 mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="last_name"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Rating</label>
//             <div className="flex space-x-4">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <label key={star} className="flex items-center">
//                   <input
//                     type="radio"
//                     name="rating"
//                     className="sr-only"
//                     checked={formData.rating === star}
//                     onChange={() => handleRatingChange(star)}
//                   />
//                   <div
//                     className={`w-6 h-6 rounded-full flex items-center justify-center border ${
//                       formData.rating === star ? "bg-yellow-500 border-yellow-500" : "border-gray-300 bg-white"
//                     }`}
//                   >
//                     {formData.rating === star && <div className="w-3 h-3 rounded-full bg-white"></div>}
//                   </div>
//                   <span className="ml-2 text-gray-700">{star} star</span>
//                 </label>
//               ))}
//             </div>
//             <p className="mt-2 text-sm text-red-500 flex items-center gap-1">Only a <span className="flex text-base font-semibold items-start gap-[1px] text-yellow-600">( 5 <FaStar/> )</span> review earns the discount code.</p>
//           </div>

//           <div className="mb-6">
//             <label htmlFor="review" className="block text-gray-700 mb-1">
//               Your Review
//             </label>
//             <textarea
//               id="review"
//               name="review"
//               value={formData.review}
//               onChange={handleChange}
//               rows={5}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 rounded-md font-semibold text-white transition duration-300"
//             style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
//           >
//             Submit Review
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateReviewMutation } from "../redux/features/baseApi/baseApi";

export default function DiscountForm() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [createReview] = useCreateReviewMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      review: "",
    },
  });

  const handleRatingChange = (star) => {
    setRating(star);
  };

  const onSubmit =async (data) => {
    const submissionData = {
      ...data,
      rating, 
    };
    console.log("Form submitted:", submissionData);

    try {

      const response = await createReview(submissionData).unwrap();
      console.log(response);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error", error)
    }

    
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FDFBF5] p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg border border-yellow-400/30 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get your Discount Code</h1>
        <p className="text-gray-600 mb-6">
          Select your interests and get Monthly Updates on the Best AI Tools in your preferred categories.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="first_name" className="block text-gray-700 mb-1">
                First Name
              </label>
              <input
                {...register("first_name", { required: "First name is required" })}
                type="text"
                id="first_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="last_name" className="block text-gray-700 mb-1">
                Last Name
              </label>
              <input
                {...register("last_name", { required: "Last name is required" })}
                type="text"
                id="last_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
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
                    checked={rating === star}
                    onChange={() => handleRatingChange(star)}
                  />
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                      rating === star ? "bg-yellow-500 border-yellow-500" : "border-gray-300 bg-white"
                    }`}
                  >
                    {rating === star && <div className="w-3 h-3 rounded-full bg-white"></div>}
                  </div>
                  <span className="ml-2 text-gray-700">{star} star</span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
              Only a{" "}
              <span className="flex text-base font-semibold items-start gap-[1px] text-yellow-600">
                ( 5 <FaStar /> )
              </span>{" "}
              review earns the discount code.
            </p>
          </div>

          <div className="mb-6">
            <label htmlFor="review" className="block text-gray-700 mb-1">
              Paste your Amazon review here :
            </label>
            <textarea
              {...register("review", { required: "Review is required" })}
              id="review"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            {errors.review && (
              <p className="text-red-500 text-sm mt-1">{errors.review.message}</p>
            )}
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