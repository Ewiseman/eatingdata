import React, { useState, useEffect } from "react";
import axios from "axios";
import NewIngredientForm from "./NewIngredientForm";
import IngredientSummary from "./IngredientSummary";

const IngredientsList = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/ingredients.json")
      .then((res) => setIngredients(res.data));
  }, []);

  const [ingredients, setIngredients] = useState([]);

  const initialFormState = {
    name: "",
  };

  // ADD Ingredient //
  const addIngredient = (ingredient) => {
    axios
      .post(
        "http://localhost:3001/api/v1/ingredients",
        { ingredient },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        setIngredients([...ingredients, res.data]);
      })
      .catch((error) => console.log(error));
  };

  // REMOVE RECIPE //
  const removeIngredient = (id) => {
    console.log("delete", id);
    axios
      .delete("http://localhost:3001/api/v1/ingredients/" + id)
      .then((res) => {
        setIngredients(
          ingredients.filter((ingredient) => ingredient.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <div>
        <h1>Ingredients</h1>
        <hr />
        <br />
        <NewIngredientForm
          addIngredient={addIngredient}
          initialFormState={initialFormState}
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="ingredients-list">
        {ingredients.map((ingredient, _) => (
          <IngredientSummary
            key={ingredient.id}
            ingredient={ingredient}
            removeIngredient={removeIngredient}
          />
        ))}
      </div>
    </section>
  );
};
export default IngredientsList;
