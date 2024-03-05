import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3030/api/auth/login', {
      email,
      password,
    });

    // Assuming the API returns a token upon successful login
    const token = response.data.accessToken;

    // You may want to handle token storage (e.g., localStorage.setItem('token', token))
    console.log(response);

    return token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
