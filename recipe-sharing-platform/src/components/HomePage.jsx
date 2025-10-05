import React, { useState, useEffect } from "react";
import AddRecipeForm from "./AddRecipeForm";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load data from the local JSON file
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipe data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽️ Recipe Sharing Platform
      </h1>
        <AddRecipeForm/>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {recipes.map((recipe) => (
            
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
