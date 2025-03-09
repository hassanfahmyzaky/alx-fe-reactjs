import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDelete = () => {
    // Delete the recipe
    deleteRecipe(recipeId);

    // Redirect the user back to the recipe list
    navigate('/');
  };

  return (
    <button 
