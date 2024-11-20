import React from "react";
import { motion } from "framer-motion";

const RecipeCard = ({ recipe }) => {
  return (
    <motion.div
      className="recipe-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
    </motion.div>
  );
};

export default RecipeCard;