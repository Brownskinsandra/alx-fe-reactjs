import { useState } from "react";
import axios from "axios";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");  // Location state
    const [minRepos, setMinRepos] = useState(0);  // Minimum repos state
    const [userResults, setUserResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUserData = async () => {
        setLoading(true);
        setError(false);  
        setUserResults([]);  // Reset user results on new search

        // Construct search query
        let query = `${searchTerm}`;
        if (location) query += `+location:${location}`;
        if (minRepos > 0) query += `+repos:>${minRepos}`;

        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
            setUserResults(response.data.items);  // Set user results if found
        } catch (err) {
            setError(true);  // Set error if no users are found or other issues
        }
        setLoading(false);  // Turn off loading once data is received
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            fetchUserData();  // Fetch data based on new query
            setSearchTerm("");  // Clear the search input
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded-md"
                />
                <input
                    type="number"
                    placeholder="Min Repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="w-full p-2 border rounded-md"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                    Search
                </button>
            </form>

            {/* Loading state */}
            {loading && <p>Loading...</p>}

            {/* Error message */}
            {error && <p>Looks like we can't find users matching your criteria.</p>}

            {/* Display user results */}
            {userResults.length > 0 && (
                <div className="space-y-4 mt-4">
                    {userResults.map((user) => (
                        <div key={user.id} className="flex items-center space-x-4 border p-4 rounded-md">
                            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                            <div>
                                <h2 className="font-semibold text-lg">{user.login}</h2>
                                <p>{user.location || "No location provided"}</p>
                                <p>Repositories: {user.public_repos}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600"
                                >
                                    Visit Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
