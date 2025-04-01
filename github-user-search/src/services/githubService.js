import axios from 'axios';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;  // Return user data if found
    } catch (error) {
        return null;  // Return null if user is not found or any other error occurs
    }
};
