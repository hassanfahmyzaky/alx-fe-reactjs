import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  // Use filteredRecipes from the Zustand store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <div>
        <Link to="/add">
          <button>Add New Recipe</button>
        </Link>
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try a different search term!</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes available. Add some!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button>View Recipe Details</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
