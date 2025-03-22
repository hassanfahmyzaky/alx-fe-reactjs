// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserProfile from './components/UserProfile'; // Importing UserProfile component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logos Section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Main Header */}
      <h1 className="text-center text-3xl my-4">Vite + React</h1>

      {/* Counter Section */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className="btn btn-primary">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Instruction Text */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* UserProfile Component */}
      <UserProfile />
    </>
  );
}

export default App;
