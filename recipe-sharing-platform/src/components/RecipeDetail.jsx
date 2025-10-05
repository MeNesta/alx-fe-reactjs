import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline hover:text-blue-800"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-2xl shadow-md max-w-3xl mx-auto overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🥕 Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🍳 Instructions
              </h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Step 1: Prepare the ingredients.</li>
                <li>Step 2: Cook according to the recipe instructions.</li>
                <li>Step 3: Serve and enjoy!</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
