// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(username);  // Pass the username to the parent component (App)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for GitHub users..."
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
