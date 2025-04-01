import { useState } from "react";

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
            setSearchTerm(""); // Clear input after searching
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
