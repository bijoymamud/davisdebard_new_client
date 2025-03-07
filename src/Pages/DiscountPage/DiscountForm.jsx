"use client"

import React, { useState } from "react";

export default function DiscountForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reviewDate: "",
    rating: 5,
    review: "",
  });

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
    // Here you would typically send the data to your backend
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
            <label htmlFor="reviewDate" className="block text-gray-700 mb-1">
              Review Date
            </label>
            <input
              type="date"
              id="reviewDate"
              name="reviewDate"
              value={formData.reviewDate}
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
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-md transition duration-200"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
