import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Search from './components/Search'; // Search component
import UserCard from './components/UserCard'; // User data display component
import { fetchGitHubUser } from './services/githubService'; // Import fetchGitHubUser service

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // For storing the search query
  const [userData, setUserData] = useState(null); // For storing fetched user data
  const [error, setError] = useState(null); // For storing error messages
  const [loading, setLoading] = useState(false); // For managing loading state
  const [count, setCount] = useState(0); // Optional counter section (for testing HMR)

  // Handle the search and fetch the GitHub user data
  const handleSearch = async () => {
    if (searchQuery) {
      setLoading(true); // Set loading to true before making the API call
      setError(null); // Reset error state
      try {
        const data = await fetchGitHubUser(searchQuery); // Fetch GitHub user data
        if (data.message === 'Not Found') {
          setError('User not found'); // Handle case when user is not found
        } else {
          setUserData(data); // Store the fetched user data in state
          setError(null); // Clear any previous error messages
        }
      } catch (error) {
        setError('Error fetching GitHub user'); // Handle API error
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after API call is completed
      }
    }
  };

  return (
    <div className="App">
      {/* Logo Section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Header */}
      <h1>GitHub User Search</h1>

      {/* Search Component */}
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        loading={loading}
        error={error}
        userData={userData}
      />

      {/* Optional Counter Section */}
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
