import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipesList = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/recipes.json")
      .then((res) => setRecipes(res.data));
  }, []);

  const [recipes, setRecipes] = useState([]);

  // REMOVE RECIPE //
  const removeRecipe = (id) => {
    axios
      .delete("http://localhost:3001/api/v1/recipes/" + id + ".json")
      .then((res) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => console.log(error));
  };

  // ON THE MENU //
  const onMenu = async (id) => {
    const big = "http://localhost:3001/api/v1/recipes/" + id + ".json";
    console.log(big);
  };

  return (
    <section>
      <br />
      <br />
      <br />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {recipes.map((recipe, _) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              removeRecipe={removeRecipe}
              onMenu={onMenu}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecipesList;
