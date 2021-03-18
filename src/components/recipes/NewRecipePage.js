import React, { useState } from "react";
import axios from "axios";
import NewRecipeForm from "./NewRecipeForm";

const NewRecipePage = () => {
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

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="container my-12 mx-auto px-4 md:px-12 flex justify-center ...">
        <NewRecipeForm
          addRecipe={addRecipe}
          initialFormState={initialFormState}
        />
      </div>
    </div>
  );
};

export default NewRecipePage;
