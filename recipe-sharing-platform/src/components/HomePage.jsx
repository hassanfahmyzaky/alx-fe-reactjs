import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importing the 'Link' component
import recipeData from '../data.json'; // Importing your recipe data

const HomePage = () => {
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    // You can directly use the imported recipeData to set state
    setRecipesList(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Recipe Sharing Platform</h1>

      {/* Recipe Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {recipesList.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
