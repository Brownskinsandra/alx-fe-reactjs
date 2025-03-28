import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Recipe Sharing Platform</h1>

      <div className="flex justify-center mt-6">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Add a New Recipe
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
