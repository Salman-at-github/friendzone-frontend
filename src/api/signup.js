import axios from 'axios';


export const signup = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3030/api/auth/signup', {
    name: formData.name.trim(),  
    email: formData.email.trim(),
    password: formData.password.trim(),
    });

    // You may want to handle token storage (e.g., localStorage.setItem('token', token))
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
