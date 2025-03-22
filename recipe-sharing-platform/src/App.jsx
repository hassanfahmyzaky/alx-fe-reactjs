import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './components/HomePage'; // Import HomePage component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Recipe Sharing Greeting */}
      <div className="text-blue-500">
        <h1>Hello, Recipe Sharing Platform!</h1>
      </div>

      {/* Vite and React Logos Section */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Vite + React Info Section */}
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Include HomePage component here */}
      <HomePage />
    </>
  );
}

export default App;
