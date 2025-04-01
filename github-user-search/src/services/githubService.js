import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

/**
 * Fetch GitHub users based on search criteria.
 * @param {string} username - GitHub username to search for.
 * @param {string} location - Location filter (optional).
 * @param {number} minRepos - Minimum repository count (optional).
 * @returns {Promise} - Axios response with user data.
 */
export const fetchUserData = async (username, location = "", minRepos = 0) => {
    try {
        // Construct search query
        let query = `${username}`;
        if (location) query += `+location:${location}`;
        if (minRepos > 0) query += `+repos:>${minRepos}`;

        // Make API request
        const response = await axios.get(`${GITHUB_API_URL}${query}`);
        
        return response.data.items; // Returns array of users
    } catch (error) {
        console.error("Error fetching GitHub users:", error);
        return [];
    }
};
