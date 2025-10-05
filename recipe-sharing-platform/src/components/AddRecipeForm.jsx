import { useState } from "react";

export default function AddRecipeForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Please add at least two ingredients.";
    } else {
      const ingredientList = ingredients.split(",").map((i) => i.trim());
      if (ingredientList.length < 2)
        newErrors.ingredients = "Include at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n").map((s) => s.trim()),
    };

    if (onSubmit) {
      onSubmit(newRecipe);
    }

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add a New Recipe
        </h2>

        {/* Recipe Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-400"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients separated by commas"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-400"
            }`}
            rows={4}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Write each step on a new line"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-400"
            }`}
            rows={5}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
