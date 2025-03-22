import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Mock recipe data (replace with actual data source in a real project)
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs",
      "50g Parmesan cheese",
      "Black pepper"
    ],
    steps: [
      "Boil the spaghetti in salted water.",
      "Fry the pancetta in olive oil until crispy.",
      "Whisk eggs and Parmesan in a bowl.",
      "Toss the pasta with pancetta and egg mixture."
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "500g chicken breast",
      "200g yogurt",
      "Spices (garam masala, turmeric, cumin)",
      "200ml tomato puree",
      "Fresh coriander"
    ],
    steps: [
      "Marinate the chicken in yogurt and spices.",
      "Grill the chicken until cooked.",
      "Make the gravy with tomato puree and spices.",
      "Simmer the chicken in the gravy until fully cooked."
    ]
  }
  // Add other recipes similarly...
];

function RecipeDetail() {
  const { id } = useParams();  // Get the id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching id
    const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4" />
      <p className="mb-4 text-lg">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-lg">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
      <ol className="list-decimal list-inside">
        {recipe.steps.map((step, index) => (
          <li key={index} className="text-lg">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
