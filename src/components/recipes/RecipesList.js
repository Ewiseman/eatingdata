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
    cookbook_id: "",
  };

  // ADD RECIPE //
  const addRecipe = (recipe) => {
    console.log(recipe);
    axios
      .post(
        "http://localhost:3001/api/v1/recipes.json",
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
    axios
      .delete("http://localhost:3001/api/v1/recipes/" + id + ".json")
      .then((res) => {
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
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="grid grid-cols-5 gap-4">
          {recipes.map((recipe, _) => (
            <RecipeSummary
              key={recipe.id}
              recipe={recipe}
              removeRecipe={removeRecipe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecipesList;
