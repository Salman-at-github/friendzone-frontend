import axios from "axios";

export const fetchUser = async(signal)=>{
    try {
    
        const response = await axios({
          method: "GET",
          url: 'http://localhost:3030/api/users/get',
          headers: {
            'Authorization': localStorage.getItem('token')
          },
          signal
        });
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw error; // Throw the error for the calling hook to handle
      }
}