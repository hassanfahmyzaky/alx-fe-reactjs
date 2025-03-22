import { useState } from "react";

const AddRecipeForm = () => {
  // State to hold form input values
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});  // New state for form errors

  // Validation function
  const validate = () => {
    const errors = {};  // Object to hold errors

    // Check if title is empty
    if (!title) {
      errors.title = "Title is required.";
    }

    // Check if ingredients are provided (at least two ingredients)
    if (!ingredients || ingredients.split("\n").length < 2) {
      errors.ingredients = "Please provide at least two ingredients.";
    }

    // Check if steps are provided (at least two steps)
    if (!steps || steps.split("\n").length < 2) {
      errors.steps = "Please provide at least two preparation steps.";
    }

    return errors;  // Return the error object
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();  // Run the validation function
    setErrors(validationErrors);  // Set errors if any

    // If no errors, submit the data
    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"), // Split ingredients by newline
        steps: steps.split("\n"), // Split steps by newline
      };
      console.log(newRecipe);  // You can send this data to the server or update the state

      // Clear form after submit
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      {/* Display error if any */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (One per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients, one per line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Input */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps (One per line)
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter preparation steps, one per line"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
