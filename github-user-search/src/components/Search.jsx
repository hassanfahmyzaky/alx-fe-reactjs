import React, { useState } from 'react';
import axios from 'axios';  // Import axios to make the API request

// This function will fetch the GitHub user data
const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');  // If the user is not found or there’s an issue
  }
};

const Search = ({ searchQuery, setSearchQuery, loading, error, userData, setUserData, setError, setLoading }) => {
  // This local state will be used for user input in the form
  const [username, setUsername] = useState(searchQuery);

  const handleChange = (e) => {
    setUsername(e.target.value);
    setSearchQuery(e.target.value); // Sync the input with the parent state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const data = await fetchGitHubUser(username);  // Call fetchGitHubUser
        if (data.message === 'Not Found') {
          setError('User not found');
        } else {
          setUserData(data); // Store the fetched user data
          setError(null); // Reset error state
        }
      } catch (error) {
        setError('Error fetching GitHub user');
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after API call is completed
      }
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for GitHub users..."
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && (
        <p>{error === 'User not found' ? "Looks like we cant find the user" : error}</p>
      )}

      {/* Displaying User Data */}
      {userData && !loading && !error && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
