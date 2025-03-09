// import React from "react";
// import { useForm } from "react-hook-form";

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     alert("Message Sent Successfully!");
//   };

//   return (
//   <section className="min-h-screen bg-[#FDFBF5] flex flex-col items-center justify-center">
//       <div className=" flex justify-center py-10 px-4">
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
//             style={{
//               background: "linear-gradient(to right, #FFD700, #000)",
//             }}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default ContactForm;



import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Log data to console
    navigate("/thank-you"); // Redirect to Thank You page
  };

  return (
    <section className="bg-[#FDFBF5] flex flex-col items-center justify-center min-h-screen py-10 px-4 ">
      <div className="w-full max-w-2xl bg-white shadow-md p-6 rounded-md border border-yellow-300">
        <h2 className="text-2xl font-semibold text-black mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-white transition duration-300"
            style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
