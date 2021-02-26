import React, { useState, useEffect } from "react";
import axios from "axios";
import NewRecipeForm from "./NewRecipeForm";
import RecipeSummary from "./RecipeSummary";

const RecipesList = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/recipes.json")
      .then((res) => setRecipes(res.data));
  }, []);

  const [recipes, setRecipes] = useState([]);

  const initialFormState = {
    name: "",
    protein: "",
    multiplier: "",
  };

  // ADD RECIPE //
  const addRecipe = (recipe) => {
    axios
      .post(
        "http://localhost:3001/api/v1/recipes",
        { recipe },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        setRecipes([...recipes, res.data]);
      })
      .catch((error) => console.log(error));
  };

  // REMOVE RECIPE //
  const removeRecipe = (id) => {
    console.log("delete", id);
    axios
      .delete("http://localhost:3001/api/v1/recipes/" + id)
      .then((response) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="App">
      <div>
        <h1>Recipes</h1>
        <hr />
        <br />
        <NewRecipeForm
          addRecipe={addRecipe}
          initialFormState={initialFormState}
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="recipes-list">
        {recipes.map((recipe, _) => (
          <RecipeSummary
            key={recipe.id}
            recipe={recipe}
            removeRecipe={removeRecipe}
          />
        ))}
      </div>
    </section>
  );
};
export default RecipesList;
