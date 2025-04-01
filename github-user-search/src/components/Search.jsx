import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import API function

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState(0);
    const [userResults, setUserResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setLoading(true);
            setError(false);
            setUserResults([]);

            const results = await fetchUserData(searchTerm, location, minRepos);
            if (results.length === 0) {
                setError(true);
            }
            setUserResults(results);
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username input */}
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Location input */}
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Min Repos input */}
                <input
                    type="number"
                    placeholder="Min Repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Search button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Search
                </button>
            </form>

            {/* Loading state */}
            {loading && <p className="mt-4 text-center text-blue-500">Loading...</p>}

            {/* Error message */}
            {error && <p className="mt-4 text-center text-red-500">Looks like we can't find users matching your criteria.</p>}

            {/* Display user results */}
            {userResults.length > 0 && (
                <div className="space-y-4 mt-4">
                    {userResults.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center space-x-4 border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h2 className="font-semibold text-lg">{user.login}</h2>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
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
