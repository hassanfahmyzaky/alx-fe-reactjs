import React, { useState } from 'react';

const Search = ({ searchQuery, setSearchQuery, handleSearch, loading, error, userData }) => {
  // This local state will be used for user input in the form
  const [username, setUsername] = useState(searchQuery);

  const handleChange = (e) => {
    setUsername(e.target.value);
    setSearchQuery(e.target.value); // Sync the input with the parent state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(username);  // Pass the username to the parent component (App)
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
