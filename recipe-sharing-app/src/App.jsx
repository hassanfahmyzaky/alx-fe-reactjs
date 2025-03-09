import { useState } from 'react';
import './App.css'; // Import your CSS
import reactLogo from './assets/react.svg'; // React logo (if you want to keep)
import viteLogo from '/vite.svg'; // Vite logo (if you want to keep)
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar'; // Import the SearchBar component

function App() {
  return (
    <div className="App">
      <header>
        <div>
          {/* Vite and React logos */}
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Recipe Sharing App</h1> {/* Main title */}
      </header>

      <main>
        {/* Search bar to filter recipes */}
        <SearchBar />
        {/* Form to add new recipes */}
        <AddRecipeForm />
        {/* List of recipes */}
        <RecipeList />
      </main>
    </div>
  );
}

export default App;
