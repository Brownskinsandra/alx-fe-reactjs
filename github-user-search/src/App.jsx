import { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(false);  // Reset error on new search
        setUser(null);     // Reset user on new search

        const userData = await fetchUserData(username);  // Call the function

        if (userData) {
            setUser(userData);
        } else {
            setError(true);  // Set error if user not found
        }

        setLoading(false);  // Turn off loading once data is received
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} user={user} loading={loading} error={error} />
        </div>
    );
};

export default App;
