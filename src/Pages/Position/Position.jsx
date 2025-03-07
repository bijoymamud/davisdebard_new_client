"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

const categories = [
  {
    name: "Content Creation",
    options: ["Article Writing", "Blog Posts", "Copywriting", "Email Content", "Social Media Content"],
  },
  {
    name: "Visual Creation",
    options: ["Image Generation", "Design Assistance", "Video Editing", "Logo Creation", "Illustrations"],
  },
  {
    name: "Development",
    options: ["Code Generation", "Debugging", "Web Development", "Mobile Development", "API Integration"],
  },
  {
    name: "Business",
    options: ["Market Research", "Business Plans", "Financial Analysis", "Sales Strategies", "Customer Support"],
  },
  {
    name: "Productivity",
    options: ["Task Management", "Note Taking", "Calendar Optimization", "Email Management", "Workflow Automation"],
  },
]

export default function Position() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const toggleCategory = (category, option) => {
    const existingIndex = selectedCategories.findIndex((item) => item.category === category && item.option === option)

    if (existingIndex >= 0) {
      setSelectedCategories(selectedCategories.filter((_, index) => index !== existingIndex))
    } else {
      setSelectedCategories([...selectedCategories, { category, option }])
    }
  }

  const isOptionSelected = (category, option) => {
    return selectedCategories.some((item) => item.category === category && item.option === option)
  }

  const onSubmit = (data) => {
    const formData = {
      ...data,
      selectedCategories,
    }
    console.log(formData)
    // Handle form submission here
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg border border-yellow-200">
      <h1 className="text-2xl font-bold text-center mb-2">SUBSCRIBE TO AI RANKINGS</h1>
      <p className="text-center text-sm mb-6">
        Select Your Interests And Get Monthly Updates On The Best AI Tools In Your Preferred Categories.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full p-2 border rounded-md"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full p-2 border rounded-md"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span className="text-red-500 text-xs">This field is required</span>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded-md"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email?.type === "required" && <span className="text-red-500 text-xs">This field is required</span>}
          {errors.email?.type === "pattern" && <span className="text-red-500 text-xs">Please enter a valid email</span>}
        </div>

        <h2 className="text-xl font-semibold mb-4">Select Categoris</h2>

        <div className="space-y-3 mb-6">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <button
                type="button"
                className="w-full p-3 text-left border rounded-md flex justify-between items-center"
                onClick={() => toggleDropdown(index)}
              >
                <span>{category.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openDropdown === index && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                  <ul className="py-1">
                    {category.options.map((option, optionIndex) => (
                      <li key={optionIndex}>
                        <label className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={isOptionSelected(category.name, option)}
                            onChange={() => toggleCategory(category.name, option)}
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p>Selected Categories: {selectedCategories.length}</p>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

