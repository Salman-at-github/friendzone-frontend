import axios from "axios";

export const getPosts = async (page = 1, limit = 5, ) => {
  try {
    // Simulate a delay of 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await axios({
      method: "GET",
      url: 'http://localhost:3030/api/posts/get',
      params: { page, limit },
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};
