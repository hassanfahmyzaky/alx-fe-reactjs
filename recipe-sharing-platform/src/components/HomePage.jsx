import { useState, useEffect } from "react";

// Importing the mock data (if using import, you can import JSON directly)
import recipeData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipe data on component mount
  useEffect(() => {
    // For static data, you can use it directly (like in the example above)
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <img
              className="w-full h-48 object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="px-6 py-4">
              <h2 className="font-semibold text-xl">{recipe.title}</h2>
              <p className="text-gray-700 text-base">{recipe.summary}</p>
            </div>
            <div className="px-6 py-4">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
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
