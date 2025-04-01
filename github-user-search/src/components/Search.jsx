import { useState } from "react";

const Search = ({ onSearch, user, loading, error }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
            setSearchTerm(""); // Clear input after searching
        }
    };

    return (
        <div>
            {/* Search Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {/* Loading State */}
            {loading && <p>Loading...</p>}

            {/* Error Message */}
            {error && <p>Looks like we can't find the user.</p>}

            {/* Display User Info */}
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
