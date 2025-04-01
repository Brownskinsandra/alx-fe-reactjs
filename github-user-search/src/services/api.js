import axios from "axios";

// GitHub API base URL
const API_URL = "https://api.github.com/users/";

// Function to fetch GitHub user data
const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${API_URL}${username}`, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

export default fetchGitHubUser;
