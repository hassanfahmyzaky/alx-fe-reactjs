import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json'; // Import the mock data

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div className="text-center mt-8">
        <p>Recipe not found!</p>
        <button onClick={() => navigate('/')} className="text-blue-500 hover:underline">
          Go back to Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">{recipe.title}</h2>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-medium">Ingredients</h3>
          <ul className="list-disc pl-5 space-y-1">
            {/* Assuming ingredients are a list in your JSON */}
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-medium">Cooking Instructions</h3>
          <ol className="list-decimal pl-5 space-y-1">
            {/* Assuming steps are an array in your JSON */}
            {recipe.steps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
