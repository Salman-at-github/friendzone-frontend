import axios from 'axios';

export const createPost = async (title, content) => {
  try {
    const response = await axios.post(
      'http://localhost:3030/api/posts/add',
      {
        title: title.trim(),
        content: content.trim(),
      },
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }
    );
    return response;
  } catch (error) {
    console.error('Error during post creation:', error);
    throw error;
  }
};