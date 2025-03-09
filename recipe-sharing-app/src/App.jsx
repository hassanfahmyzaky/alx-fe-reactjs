import { useState, useEffect } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';

function App() {
  const [count, setCount] = useState(0);

  // Generate recommendations whenever the favorites change
  useEffect(() => {
    useRecipeStore.getState().generateRecommendations();
  }, [useRecipeStore.getState().favorites]);

  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>

      <main>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
        
        {/* Favorites List */}
        <FavoritesList />
        
        {/* Recommendations List */}
        <RecommendationsList />
      </main>
    </div>
  );
}

export default App;
