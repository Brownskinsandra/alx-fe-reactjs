import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 underline">← Back to Home</Link>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600">{recipe.summary}</p>

        {/* Ingredients Section */}
        <h2 className="text-xl font-semibold mt-6">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        {/* Instructions Section */}
        <h2 className="text-xl font-semibold mt-6">Cooking Instructions:</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
