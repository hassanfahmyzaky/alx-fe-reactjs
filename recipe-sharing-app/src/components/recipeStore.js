import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Action to set the initial list of recipes
  setRecipes: (recipes) => set({ recipes }),
  
  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }))
}));

export { useRecipeStore };
