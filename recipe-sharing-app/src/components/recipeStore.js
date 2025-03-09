import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // List of recipes
  favorites: [], // List of favorite recipes (IDs or recipe objects)
  recommendations: [], // List of recommended recipes
  searchTerm: '', // Search term for filtering
  filteredRecipes: [], // Filtered recipes based on the search term

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to add a new recipe to the store
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // Action to set initial recipes
  setRecipes: (recipes) => set({ recipes }),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Action to delete a recipe by id
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Example logic: generate recommendations based on favorite recipes
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Placeholder logic
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
