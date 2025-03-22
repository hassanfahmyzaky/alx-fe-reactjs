import { useEffect, useState } from 'react';

// Mock recipe data
const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    summary: 'A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    summary: 'Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Beef Stroganoff',
    summary: 'A rich and creamy beef dish served with noodles or rice.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: 'Vegetable Stir-Fry',
    summary: 'A quick stir-fry with mixed vegetables and a soy-based sauce.',
    image: 'https://via.placeholder.com/150'
  }
];

function HomePage() {
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    // Mock fetch request to load data
    setRecipesList(recipes);
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
