import axios from "axios";

export const getPosts = async (page = 1, limit = 5, signal, token) => {
  try {
    // Simulate a delay of 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios({
      method: "GET",
      url: 'http://localhost:3030/api/posts/get',
      params: { page, limit },
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      signal, // Attach the AbortSignal to the request
    });

    console.log("Fetching ======================== ", response.data);
    return response.data;
  } catch (error) {
    throw error; // Throw the error for the calling hook to handle
  }
};
