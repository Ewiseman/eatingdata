import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({ ingredients: [] });
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/recipes/${id}.json`,
    }).then((res) => {
      setRecipe(res.data);
    });
  }, [id]);

  console.log(recipe.ingredients);
  return (
    <div className="recipe" key={recipe.id}>
      <h4 className="recipe-title">{recipe.name}</h4>
      {recipe.ingredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.name}</li>
      ))}
    </div>
  );
};

export default Recipe;
