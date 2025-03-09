import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate hook to handle routing

  const handleDelete = () => {
    // Call the deleteRecipe function from Zustand store to remove the recipe
    deleteRecipe(recipeId);

    // After deletion, navigate the user to the home page (recipe list)
    navigate('/');
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
