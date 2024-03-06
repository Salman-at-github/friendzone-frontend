export const signupValidation = {
    name: [
      {
        condition: (value) => value.trim() === "",
        message: "Name is required",
      },
    ],
    email: [
      {
        condition: (value) => !/^\S+@\S+\.\S+$/.test(value),
        message: "Invalid email address",
      },
    ],
    password: [
      {
        condition: (value) => value.length < 8,
        message: "Password must be at least 8 characters",
      },
      {
        condition: (value) => !/[A-Z]/.test(value),
        message: "Password must contain at least one uppercase letter",
      },
      {
        condition: (value) => !/[a-z]/.test(value),
        message: "Password must contain at least one lowercase letter",
      },
      {
        condition: (value) => !/\d/.test(value),
        message: "Password must contain at least one digit",
      },
      {
        condition: (value) => !/[!@#$%^&*()-=_+[\]{}|;:'",.<>/?\\]/.test(value),
        message: "Password must contain at least one special character",
      },
    ],
    cpassword: [
      {
        condition: (value, formData) => value !== formData?.password,
        message: "Passwords do not match!",
      },
    ],
  };