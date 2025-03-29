// src/components/Search.jsx
import React from 'react';

const Search = ({ searchQuery, setSearchQuery, handleSearch, loading, error, userData }) => {
  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter GitHub Username..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => handleSearch(searchQuery)}>Search</button>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p>{error}</p>}

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
