import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
