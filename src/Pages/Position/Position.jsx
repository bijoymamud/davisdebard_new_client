

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SubscriptionForm() {
  const categoriesData = {
    "Language & Communications": [
      "Natural Language Processing",
      "Text Generation and Summarization",
      "Translation and Multilingual Capabilities",
      "Conversation and Chatbots",
    ],
    "Knowledge & Learning": [
      "Information Extraction and Synthesis",
      "Research Assistance",
      "Educational Content Generation",
      "Domain Specific Expertise",
    ],
    "Decision Support & Analytics": [
      "Pattern Recognition and Insights",
      "Predictive Analytics",
      "Risk Assessment",
      "Process Optimization",
    ],
    "Multimedia Generation & Processing": [
      "Image Generation and Editing",
      "Audio Synthesis and Processing",
      "Video Generation and Manipulation",
      "Speech Recognition and Synthesis",
    ],
    "Code & Development": [
      "Code Generation and Completion",
      "Code Refactoring and Optimization",
      "Document Generation",
      "Bug Detection and Fixing",
    ],
  };

  const [expandedCategories, setExpandedCategories] = useState({
    "Language & Communications": true,
    "Knowledge & Learning": false,
    "Decision Support & Analytics": false,
    "Multimedia Generation & Processing": false,
    "Code & Development": false,
  });

  const [selectedOptions, setSelectedOptions] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    });
  };

  const toggleOption = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };

  const selectedCount = Object.values(selectedOptions).filter(Boolean).length;

  const onSubmit = async (data) => {
    const submissionData = {
      ...data,
      selectedCategories: Object.keys(selectedOptions).filter(
        (key) => selectedOptions[key]
      ),
    };
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmittedData(submissionData);
    console.log("Submitted data:", submissionData);
    
    // Optional: Reset form after submission
    // reset();
    // setSelectedOptions({});
  };

  return (
    <section className="bg-[#FDFBF5] py-10 px-3 md:px-20">
      <div className="border-2 border-yellow-200 max-w-6xl mx-auto md:p-10 p-5 bg-white">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          Subscribe to AI Rankings
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Select your interests and get monthly updates on the best AI tools in
          your preferred categories.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block font-medium mb-1 text-sm sm:text-base"
              >
                First Name
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block font-medium mb-1 text-sm sm:text-base"
              >
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block font-medium mb-1 text-sm sm:text-base"
            >
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
              className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Select Categories
          </h2>

          <div className="space-y-3">
            {Object.keys(categoriesData).map((category) => (
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
                      <label
                        key={subcategory}
                        className="flex items-center space-x-2 text-sm sm:text-base"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions[subcategory] || false}
                          onChange={() => toggleOption(subcategory)}
                          className="h-4 w-4"
                        />
                        <span>{subcategory}</span>
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-5 rounded-md font-semibold text-white transition duration-300 disabled:opacity-50"
            style={{ background: "linear-gradient(to right, #FFD700, #000)" }}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </button>
        </form>

      </div>
    </section>
  );
}



