// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SearchBar from './components/SearchBar';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // For storing the search query
  const [userData, setUserData] = useState(null); // For storing fetched user data
  const [error, setError] = useState(null); // For storing error messages
  const [loading, setLoading] = useState(false); // For managing loading state

  const handleSearch = async () => {
    if (searchQuery) {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGitHubUser(searchQuery);
        if (data.message === 'Not Found') {
          setError('User not found');
        } else {
          setUserData(data); // Store the fetched user data
          setError(null);
        }
      } catch (error) {
        setError('Error fetching GitHub user');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GitHub User Search</h1>
      
      {/* SearchBar Component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      
      {/* Loading State */}
      {loading && <p>Loading...</p>}
      
      {/* Error Message */}
      {error && <p>{error}</p>}

      {/* UserCard Component */}
      <UserCard userData={userData} />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Optional counter section */}
      <div>
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
    </div>
  );
};

export default App;
