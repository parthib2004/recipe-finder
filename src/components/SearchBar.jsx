import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SearchBar = ({ setRecipes }) => {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&diet=${diet}&number=10&apiKey=${API_KEY}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="search-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <input
          type="text"
          placeholder="Enter ingredients (e.g., tomato, cheese)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="">Select Diet Preference</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten free">Gluten-Free</option>
          <option value="paleo">Paleo</option>
          <option value="ketogenic">Ketogenic</option>
        </select>
      </div>
      <button type="submit">Search</button>
    </motion.form>
  );
};

export default SearchBar;