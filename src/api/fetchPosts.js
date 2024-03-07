import axios from "axios";

export const getPosts = async (page, limit, ) => {
  try {
    // Simulate a delay of 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_HOST}/api/posts/get`,
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
