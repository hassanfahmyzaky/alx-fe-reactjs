import { useEffect, useState } from 'react';
import recipeData from '../data.json'; // Import the mock data

function HomePage() {
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    // You can directly use the imported recipeData to set state
    setRecipesList(recipeData);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Recipe Sharing Platform</h2>

      {/* Recipe Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesList.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
