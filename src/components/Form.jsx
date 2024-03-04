import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your API endpoint for form submission
    const apiUrl = "https://example.com/api/signup";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or show a success message
        console.log("Form submitted successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle network error or other issues
      console.error("Error submitting form", error);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-8 bg-white rounded shadow-md mt-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* Password Field */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md pr-10"
            required
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-3 right-2 text-gray-600"
            title="View Password"
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Form;
