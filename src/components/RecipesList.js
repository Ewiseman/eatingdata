import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipesList = props => {

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/recipes.json')
        .then(res => setrecipes(res.data))
      }, []);

  const [recipes, setrecipes] = useState([]);

  return (
    <div>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index}>
            {recipe.name} | {recipe.protein} | {recipe.vegan ? "Vegan" : "Not Vegan" } | {recipe.multiplier}
          </div>
        ))}
      </div>
    </div>
  )
};
export default RecipesList;