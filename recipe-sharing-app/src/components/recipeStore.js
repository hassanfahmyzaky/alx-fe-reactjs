import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // List of favorite recipe IDs
  searchTerm: '', // The term used to filter recipes
  filteredRecipes: [], // Filtered recipes based on search term

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to set the initial list of recipes
  setRecipes: (recipes) => set({ recipes }),

  // Action to update the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to add a recipe to the favorites list
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),

  // Action to remove a recipe from the favorites list
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),
}));

export { useRecipeStore };
