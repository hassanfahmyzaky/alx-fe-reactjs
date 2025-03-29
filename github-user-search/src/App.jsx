import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const data = await fetchGitHubUser(searchQuery);
        if (data.message === 'Not Found') {
          setError('User not found');
        } else {
          setUserData(data);
          setError(null);
        }
      } catch (error) {
        setError('Error fetching GitHub user');
        console.error(error);
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
      
      {/* Error message */}
      {error && <p>{error}</p>}
      
      {/* UserCard Component */}
      <UserCard userData={userData} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

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
