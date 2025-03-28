import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json"; // Assuming the path to data.json

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL parameter
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  // Fetch recipe data when the component is mounted
  useEffect(() => {
    // Find the recipe with the corresponding ID
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
        Back to Home
      </button>
      <div className="recipe-detail">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover mb-4 shadow-md"
        />
        <h2 className="text-3xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-lg text-gray-700 mb-4">{recipe.summary}</p>

        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc ml-6 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal ml-6">
          {/* Ensure to use recipe.steps instead of recipe.instructions */}
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
