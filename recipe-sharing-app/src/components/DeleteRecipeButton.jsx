import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Import useNavigate for redirection

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted!');
    navigate('/'); // Redirects to homepage or recipe list after deletion
  };

  return <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
