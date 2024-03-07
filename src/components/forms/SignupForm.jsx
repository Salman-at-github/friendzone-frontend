import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { signupValidation } from "../../utils/validationRules";
import { signup } from "../../api/signup";
import useRedirect from "../../hooks/useRedirect";
import { useShowToast } from "../../hooks/useShowToast";

const SignupForm = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  
  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    initialState,
    signupValidation
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {goTo} = useRedirect()
  const showToast = useShowToast()
  const submitSignup = async (e) => {
    e.preventDefault();
  
    await handleSubmit(e, async (formData) => {
      try {
        await signup(formData);
        showToast("success","Signed up successfully. Please login.")
        goTo("/login");
      } catch (error) {
        console.log("ERRRRRRRRRRRRRRRR=== ",error.response.data.message)
        showToast('error',`Signup failed. ${error?.response.data.message}`)
      }
    });
  };

  return (
    <form
      className="md:min-w-[500px] p-8 bg-white rounded shadow-md my-10"
      onSubmit={submitSignup}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
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
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* show validation error */}
      {Object.entries(errors).map(([key, value]) => (
            <p key={key} className="text-sm text-red-500 mb-4">
              {value}
            </p>
          ))}

      {/* Submit Button */}
      <button
      disabled={Object.values(errors).some((error) => error)}
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        Sign Up
      </button><p className="mt-8 ">Have an account? <Link to="/login" className="text-blue-500 font-semibold">Login </Link>here</p>

    </form>
  );
};

export default SignupForm;
