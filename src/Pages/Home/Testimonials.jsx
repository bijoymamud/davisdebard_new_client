import React from "react";

const reviews = [
  {
    name: "Sarah L.",
    title: "AI Researcher",
    text: "This book breaks down complex AI concepts into easy-to-understand insights. A perfect guide for anyone looking to explore AI tools and their real-world applications.",
    image: "https://media.istockphoto.com/id/686654552/photo/filipina-transgender-businesswoman-waiting-for-train-departure.jpg?s=612x612&w=0&k=20&c=Ck6SyIwrRrTdMcwOrU12yRPXdY72IYVBGcz-I89ys9g="
  },
  {
    name: "John D.",
    title: "Tech Consultant",
    text: "Choose the Best AI provides a well-structured approach to understanding AI advancements and selecting the right tools. Highly recommended for professionals and beginners alike.",
    image: "https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Ubold Customer",
    title: "Teacher",
    text: "This book helped me navigate the overwhelming AI landscape. The industry-wise breakdown and expert recommendations saved me hours of research.",
     image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#FDFBF5] px-4 sm:px-6 lg:px-8 text-center py-20">
      <h2 className="text-4xl font-bold text-gray-900">What People Said About My Books</h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Readers love this book for its clear insights and practical guide to AI tools, making
        complex concepts easy to understand and helping them stay ahead in the AI world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto mt-20">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-yellow-300"
          >
            <div className="flex justify-center -mt-16">
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                src={review.image} 
                alt={review.name}
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Bright Light Books</h3>
            <p className="text-yellow-600 font-semibold">{review.name}  ({review.title})</p>
            <p className="mt-3 text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
