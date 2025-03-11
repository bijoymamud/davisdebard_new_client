


// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useCreateNewsletterMutation, useGetCategoryQuery } from "../redux/features/baseApi/baseApi";

// export default function SubscriptionForm() {
//   const { data, isLoading } = useGetCategoryQuery();
//   const AllCategory = data?.data || [];

//   // API mutation hook for creating a category
//   const [createNewsletter, { isLoading: isSubmitting, error }] = useCreateNewsletterMutation();

//   // State to store transformed categories
//   const [categoriesData, setCategoriesData] = useState({});
//   const [expandedCategories, setExpandedCategories] = useState({});
//   const [selectedOptions, setSelectedOptions] = useState({});

//   // Debugging: Log API response
//   console.log("Fetched Categories:", AllCategory);

//   useEffect(() => {
//     if (AllCategory.length > 0) {
//       console.log("Processing API Data...");
      
//       const groupedData = AllCategory.reduce((acc, item) => {
//         if (!acc[item.parent]) {
//           acc[item.parent] = [];
//         }
//         acc[item.parent].push({ name: item.name, slug: item.slug });
//         return acc;
//       }, {});

//       console.log("Grouped Categories:", groupedData);
      
//       setCategoriesData(groupedData);
//       setExpandedCategories(Object.keys(groupedData).reduce((acc, key) => ({ ...acc, [key]: false }), {}));
//     }
//   }, [data]); // Watch `data` instead of `AllCategory`

//   const { register, handleSubmit, formState: { errors }, reset } = useForm();

//   const toggleCategory = (category) => {
//     setExpandedCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const toggleOption = (subcategory) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [subcategory.name]: !prev[subcategory.name],
//     }));
//   };

//   const selectedCount = Object.values(selectedOptions).filter(Boolean).length;

//   const onSubmit = async (formData) => {
//     const selectedCategories = AllCategory.filter(item => selectedOptions[item.name])
//       .map(item => (item.slug));

//     const submissionData = {
//       first_name: formData.first_name,
//       last_name: formData.last_name,
//       email: formData.email,
//       categories: selectedCategories,
//     };

//     try {
//       await createNewsletter(submissionData).unwrap();
//       console.log("Category created successfully!", submissionData);
//       reset(); 
//       setSelectedOptions({});
//     } catch (err) {
//       console.error("Failed to create category:", err);
//     }
//   };

//   return (
//     <section className="bg-[#FDFBF5] py-10 px-3 md:px-20">
//       <div className="border-2 border-yellow-200 max-w-6xl mx-auto md:p-10 p-5 bg-white">
//         <h1 className="text-xl sm:text-2xl font-bold mb-2">Subscribe to AI Rankings</h1>
//         <p className="text-gray-600 mb-6 text-sm sm:text-base">
//           Select your interests and get monthly updates on the best AI tools in your preferred categories.
//         </p>

//         {isLoading ? (
//           <p className="text-center text-gray-500">Loading categories...</p>
//         ) : Object.keys(categoriesData).length === 0 ? (
//           <p className="text-gray-500 text-center">No categories found.</p>
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Name Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="first_name" className="block font-medium mb-1 text-sm sm:text-base">First Name</label>
//                 <input
//                   {...register("first_name", { required: "First name is required" })}
//                   type="text"
//                   id="first_name"
//                   className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
//                 />
//                 {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
//               </div>
//               <div>
//                 <label htmlFor="last_name" className="block font-medium mb-1 text-sm sm:text-base">Last Name</label>
//                 <input
//                   {...register("last_name", { required: "Last name is required" })}
//                   type="text"
//                   id="lastName"
//                   className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
//                 />
//                 {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="mb-6">
//               <label htmlFor="email" className="block font-medium mb-1 text-sm sm:text-base">Email</label>
//               <input
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid email address",
//                   },
//                 })}
//                 type="email"
//                 id="email"
//                 className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//             </div>

//             {/* Categories Section */}
//             <h2 className="text-lg sm:text-xl font-bold mb-4">Select Categories</h2>

//             <div className="space-y-3">
//               {Object.keys(categoriesData).map((category) => (
//                 <div key={category} className="border border-gray-300 rounded">
//                   <button
//                     type="button"
//                     onClick={() => toggleCategory(category)}
//                     className="w-full flex justify-between items-center p-3 sm:p-4 text-sm sm:text-base"
//                   >
//                     <span className="font-medium">{category}</span>
//                     {expandedCategories[category] ? (
//                       <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
//                     ) : (
//                       <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
//                     )}
//                   </button>

//                   {expandedCategories[category] && (
//                     <div className="p-3 sm:p-4 pt-0 space-y-2">
//                       {categoriesData[category].map((subcategory) => (
//                         <label key={subcategory.name} className="flex items-center space-x-2 text-sm sm:text-base">
//                           <input
//                             type="checkbox"
//                             checked={selectedOptions[subcategory.name] || false}
//                             onChange={() => toggleOption(subcategory)}
//                             className="h-4 w-4"
//                           />
//                           <span>{subcategory.name}</span>
//                         </label>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               <div className="text-xs sm:text-sm text-green-600 font-medium">
//                 <p className="flex items-center gap-1">
//                   Selected Categories: <span className="text-base">{selectedCount}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full py-3 mt-5 rounded-md font-semibold text-white transition duration-300 disabled:opacity-50"
//               style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
//             >
//               {isSubmitting ? "Submitting..." : "Subscribe"}
//             </button>

//             {error && <p className="text-red-500 text-sm mt-2">Error: {error.message}</p>}
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }



import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useCreateNewsletterMutation, useGetCategoryQuery } from "../redux/features/baseApi/baseApi";

export default function SubscriptionForm() {
  const { data, isLoading } = useGetCategoryQuery();
  const AllCategory = data?.data || [];

  const [createNewsletter, { isLoading: isSubmitting, error }] = useCreateNewsletterMutation();

  const [categoriesData, setCategoriesData] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  console.log("Fetched Categories:", AllCategory);

  useEffect(() => {
    if (AllCategory.length > 0) {
      console.log("Processing API Data...");
      
      const groupedData = AllCategory.reduce((acc, item) => {
        if (!acc[item.parent]) {
          acc[item.parent] = [];
        }
        acc[item.parent].push({ name: item.name, slug: item.slug });
        return acc;
      }, {});

      console.log("Grouped Categories:", groupedData);
      
      setCategoriesData(groupedData);
      setExpandedCategories(Object.keys(groupedData).reduce((acc, key) => ({ ...acc, [key]: false }), {}));
    }
  }, [data]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleOption = (subcategory) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [subcategory.name]: !prev[subcategory.name],
    }));
  };

  const selectedCount = Object.values(selectedOptions).filter(Boolean).length;

  const onSubmit = async (formData) => {
    const selectedCategories = AllCategory.filter(item => selectedOptions[item.name])
      .map(item => item.slug);

    const submissionData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      categories: selectedCategories,
    };

    try {
      await createNewsletter(submissionData).unwrap();
      console.log("Category created successfully!", submissionData);
      reset(); 
      setSelectedOptions({});
    } catch (err) {
      console.error("Failed to create category:", err);
    }
  };

  return (
    <section className="bg-[#FDFBF5] py-10 px-3 md:px-20">
      <div className="border-2 border-yellow-200 max-w-6xl mx-auto md:p-10 p-5 bg-white">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Subscribe to AI Rankings</h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Select your interests and get monthly updates on the best AI tools in your preferred categories.
        </p>

        {isLoading ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : Object.keys(categoriesData).length === 0 ? (
          <p className="text-gray-500 text-center">No categories found.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="first_name" className="block font-medium mb-1 text-sm sm:text-base">First Name</label>
                <input
                  {...register("first_name", { required: "First name is required" })}
                  type="text"
                  id="first_name"
                  className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
                />
                {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
              </div>
              <div>
                <label htmlFor="last_name" className="block font-medium mb-1 text-sm sm:text-base">Last Name</label>
                <input
                  {...register("last_name", { required: "Last name is required" })}
                  type="text"
                  id="lastName"
                  className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
                />
                {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block font-medium mb-1 text-sm sm:text-base">Email</label>
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
                className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Categories Section */}
            <h2 className="text-lg sm:text-xl font-bold mb-4">Select Categories</h2>

            <div className="space-y-3">
              {Object.keys(categoriesData)
                .filter(category => category !== "null") // Filter out "null" categories
                .map((category) => (
                  <div key={category} className="border border-gray-300 rounded">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category)}
                      className="w-full flex justify-between items-center p-3 sm:p-4 text-sm sm:text-base"
                    >
                      <span className="font-medium">{category}</span>
                      {expandedCategories[category] ? (
                        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
                      ) : (
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </button>

                    {expandedCategories[category] && (
                      <div className="p-3 sm:p-4 pt-0 space-y-2">
                        {categoriesData[category].map((subcategory) => (
                          <label key={subcategory.name} className="flex items-center space-x-2 text-sm sm:text-base">
                            <input
                              type="checkbox"
                              checked={selectedOptions[subcategory.name] || false}
                              onChange={() => toggleOption(subcategory)}
                              className="h-4 w-4"
                            />
                            <span>{subcategory.name}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

              <div className="text-xs sm:text-sm text-green-600 font-medium">
                <p className="flex items-center gap-1">
                  Selected Categories: <span className="text-base">{selectedCount}</span>
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 mt-5 rounded-md font-semibold text-white transition duration-300 disabled:opacity-50"
              style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
            >
              {isSubmitting ? "Submitting..." : "Subscribe"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">Error: {error.message}</p>}
          </form>
        )}
      </div>
    </section>
  );
}