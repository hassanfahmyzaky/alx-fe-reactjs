import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(0);

  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const response = await fetch(`https://api.github.com/users/${searchQuery}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching GitHub user:", error);
      }
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GitHub User Search</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Search for GitHub users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {userData && (
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </div>
        )}
      </div>

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
