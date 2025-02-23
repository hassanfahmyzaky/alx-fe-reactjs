import React, { useState } from 'react';  // Import React and useState
import UserProfile from './components/UserProfile'; // Import UserProfile component
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import ProfilePage from './ProfilePage'; // Import ProfilePage
import { UserContext } from './UserContext'; // Import the context

function App() {
  const [count, setCount] = useState(0); // Counter state
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // Example user data

  return (
    <>
      {/* Wrapping ProfilePage with UserContext.Provider */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      {/* Other Components */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

      {/* Vite and React logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
