import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { login } from "../../api/login";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "../../api/fetchUser";
import { useGlobal } from "../../context/globalContext";
import { useShowToast } from "../../hooks/useShowToast";

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

  const {setUser} = useGlobal()

  const showToast = useShowToast()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = await login(formData.email, formData.password)
        
        if(token){
            localStorage.setItem('token',token);
            const gotUser = await fetchUser()
            if(gotUser){
              setUser(gotUser)
              localStorage.setItem('user',gotUser)
              showToast("success","Logged in successfully")
              navigateTo("/")
            }
        }
    } catch (error) {
      showToast("error",`Login Failed. ${error?.response.data.message || "Please try again later"}`)        
    }
  };

  return (
    <form
      className="mx-auto p-8 md:w-96 bg-white rounded shadow-md mt-8 border"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
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
        disabled={!formData.email || !formData.password}
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
      <p className="mt-8 ">Don't an account? <Link to="/signup" className="text-blue-500 font-semibold">Sign up </Link>here</p>
    </form>
  );
};

export default Form;
