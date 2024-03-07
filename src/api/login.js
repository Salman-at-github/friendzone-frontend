import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_HOST}/api/auth/login`, {
      email,
      password,
    });

    const token = response.data.accessToken;


    return token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
