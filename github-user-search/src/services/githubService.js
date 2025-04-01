import axios from "axios";

const API_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}${username}`);
        return response.data; // Return the user data
    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        return null; // Return null if the user is not found
    }
};
