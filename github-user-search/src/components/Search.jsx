import { useState } from "react";
import axios from "axios";  // Import Axios here for API requests

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Function to fetch data from GitHub API
    const fetchUserData = async (username) => {
        setLoading(true);
        setError(false);  // Reset error on new search
        setUser(null);     // Reset user on new search

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUser(response.data);  // Set user data if found
        } catch (err) {
            setError(true);  // Set error if user is not found or any other issue
        }
        setLoading(false);  // Turn off loading once data is received
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            fetchUserData(searchTerm);  // Call the API function with the input value
            setSearchTerm("");  // Clear input after searching
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {/* Loading state */}
            {loading && <p>Loading...</p>}

            {/* Error message if user is not found */}
            {error && <p>Looks like we can't find the user. Please try again with a valid username.</p>}

            {/* Display user info if found */}
            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <h2>{user.name || user.login}</h2>
                    <p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            Visit Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
