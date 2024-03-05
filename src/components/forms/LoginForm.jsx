import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { login } from "../../api/login";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateTo = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = await login(formData.email, formData.password)
        console.log("🚀 ~ handleSubmit ~ token:", token)
        
        if(token){
            localStorage.setItem('token',token);
            navigateTo("/")
        }
    } catch (error) {
        throw error
    }
  };

  return (
    <form
      className="mx-auto p-8 bg-white rounded shadow-md mt-8 border"
      onSubmit={handleSubmit}
    >

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


      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
