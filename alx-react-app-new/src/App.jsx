import React, { useState } from 'react'; 
import UserProfile from './components/UserProfile'; // Import UserProfile component
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter'; // Import the Counter component
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Keep count state here

  return (
    <div className="App">
      {/* UserProfile Component with props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      
      {/* WelcomeMessage, Header, MainContent, and Footer */}
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      
      {/* Counter Component */}
      <h1>Simple Counter App</h1>
      <Counter />

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
    </div>
  );
}

export default App;
