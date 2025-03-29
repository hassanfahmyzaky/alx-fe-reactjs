import React, { useState } from 'react';
import axios from 'axios';  // Import axios to make the API request

// This function will fetch the GitHub user data (single user data)
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');  // If the user is not found or there’s an issue
  }
};

// This function will search for GitHub users based on advanced criteria
const fetchGitHubUsers = async (username, location, minRepos) => {
  try {
    // Constructing the query string with the advanced search parameters
    let query = `user:${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // Return an array of user data
  } catch (error) {
    throw new Error('Error fetching users from GitHub');
  }
};

const Search = ({ searchQuery, setSearchQuery, loading, error, userData, setUserData, setError, setLoading }) => {
  // Local state for search input and advanced criteria
  const [username, setUsername] = useState(searchQuery);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
    setSearchQuery(e.target.value); // Sync the input with the parent state
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update location input
  };

  const handleMinReposChange = (e) => {
    setMinRepos(e.target.value); // Update minimum repositories input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const data = await fetchGitHubUsers(username, location, minRepos); // Fetch list of users with advanced search
        if (data.length === 0) {
          setError('Looks like we cant find the user');
        } else {
          setUserData(data); // Store the fetched users data
          setError(null); // Reset error state
        }
      } catch (error) {
        setError('Looks like we cant find the user'); // Display custom error message
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after API call is completed
      }
    }
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search for GitHub users..."
          value={username}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
          className="p-2 border rounded-md"
        />

        {/* Minimum Repositories */}
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={handleMinReposChange}
          className="p-2 border rounded-md"
        />

        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p>{error}</p>} {/* Display the error message here */}

      {/* Displaying List of Users */}
      {userData && !loading && !error && (
        <div className="user-list">
          {userData.map((user) => (
            <div key={user.id} className="user-card p-4 border mb-4 rounded-md">
              <img src={user.avatar_url} alt={user.login} width="100" />
              <h2>{user.login}</h2>
              <p>{user.bio || 'No bio available'}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
