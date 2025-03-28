import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!title.trim()) {
      tempErrors.title = "Recipe title is required!";
    }
    if (!ingredients.trim()) {
      tempErrors.ingredients = "Ingredients are required!";
    } else if (ingredients.split(",").length < 2) {
      tempErrors.ingredients = "At least two ingredients are required!";
    }
    if (!steps.trim()) {
      tempErrors.steps = "Preparation steps are required!";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((step) => step.trim()),
    };

    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg md:max-w-2xl md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-3xl">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold md:text-lg">Recipe Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:text-lg"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm md:text-base">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold md:text-lg">Ingredients (comma separated):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:text-lg"
            rows="3"
            placeholder="e.g. Chicken, Salt, Pepper"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm md:text-base">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-semibold md:text-lg">Preparation Steps (separate with a dot "."):</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:text-lg"
            rows="4"
            placeholder="e.g. Marinate chicken. Cook for 30 minutes. Serve hot."
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm md:text-base">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition md:text-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
