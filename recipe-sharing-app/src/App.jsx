import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary router components
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetail from './components/RecipeDetail'; // Import the RecipeDetail component

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing App</h1>
        </header>

        <main>
          <SearchBar />
          <Routes>
            {/* Route for Home Page */}
            <Route path="/" element={<RecipeList />} />
            {/* Route for Adding a Recipe */}
            <Route path="/add" element={<AddRecipeForm />} />
            {/* Route for Recipe Details (Dynamic path) */}
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
