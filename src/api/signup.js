import axios from 'axios';


export const signup = async (formData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_HOST}/api/auth/signup`, {
    name: formData.name.trim(),  
    email: formData.email.trim(),
    password: formData.password.trim(),
    });

    return response;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
